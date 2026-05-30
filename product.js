document.addEventListener("DOMContentLoaded", function () {
  const shopGrid = document.getElementById("shop-product-grid");
  const paginationContainer = document.querySelector(".pagination-product");
  const categoryLinks = document.querySelectorAll(".category-link");
  const sortSelect = document.querySelector(".sort-select"); // Khung chọn bộ lọc Mới nhất / Cũ nhất

  // CẤU HÌNH PHÂN TRANG VÀ BỘ LỌC
  const productsPerPage = 12;
  let currentPage = 1;
  let baseAllProducts = []; // Lưu trữ toàn bộ sản phẩm gốc (Cả new và old)
  let filteredProducts = []; // Khối sản phẩm hiển thị thực tế sau khi Lọc & Sắp xếp

  let currentCategory = "all"; // Lưu trạng thái danh mục hiện tại
  let currentSort = "newest"; // Lưu trạng thái sắp xếp hiện tại ("newest" hoặc "oldest")

  // 1. Kiểm tra kho dữ liệu và tiến hành khởi tạo ban đầu
  if (typeof products !== "undefined" && shopGrid) {
    // Đã sửa: Lấy toàn bộ sản phẩm từ data.js thay vì chỉ lọc "old"
    baseAllProducts = [...products];

    // Chạy bộ lọc và sắp xếp mặc định lần đầu tiên
    filterAndSortProducts(currentCategory, currentSort);

    // Kích hoạt bộ lắng nghe sự kiện Click chọn danh mục Sidebar
    setupCategoryFilter();

    // Kích hoạt bộ lắng nghe sự kiện Thay đổi kiểu sắp xếp
    setupSortFilter();
  }

  // HÀM TRUNG GIAN: XỬ LÝ ĐỒNG THỜI CẢ LỌC DANH MỤC VÀ SẮP XẾP MỚI/CŨ
  function filterAndSortProducts(category, sortOrder) {
    currentCategory = category;
    currentSort = sortOrder;

    // Bước A: Lọc theo danh mục trước
    if (category === "all" || !category) {
      filteredProducts = [...baseAllProducts]; // Lấy toàn bộ kho hàng
    } else {
      // Vì sản phẩm mới chưa được gán thuộc tính category, ta ưu tiên lọc theo sản phẩm cũ có category khớp,
      // hoặc nếu bạn muốn quy ước gì thêm có thể mở rộng tại đây.
      filteredProducts = baseAllProducts.filter(
        (product) => product.category === category,
      );
    }

    // Bước B: Sắp xếp theo yêu cầu (Thông minh & Đầy đủ hơn)
    if (sortOrder === "newest") {
      // Đưa sản phẩm có type: "new" lên đầu danh sách, sản phẩm "old" xuống sau
      filteredProducts.sort((a, b) => {
        if (a.type === "new" && b.type !== "new") return -1;
        if (a.type !== "new" && b.type === "new") return 1;
        return 0; // Giữ nguyên thứ tự gốc nếu cùng loại
      });
    } else if (sortOrder === "oldest") {
      // Đảo ngược lại: Đưa sản phẩm "old" lên trước, sản phẩm "new" xuống cuối cùng
      filteredProducts.sort((a, b) => {
        if (a.type === "old" && b.type !== "old") return -1;
        if (a.type !== "old" && b.type === "old") return 1;
        return 0;
      });
    }

    // Bước C: Reset về trang 1 và render lại giao diện mới
    renderPage(1);
  }

  // 2. HÀM HIỂN THỊ SẢN PHẨM THEO TRANG ĐƯỢC CHỈ ĐỊNH
  function renderPage(page) {
    currentPage = page;
    let htmlContent = "";

    // 🌟 LẤY NGÔN NGỮ HIỆN TẠI ĐỂ ĐỌC DỮ LIỆU ĐA NGÔN NGỮ
    const currentLang = localStorage.getItem("language") || "vi";

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // TỰ ĐỘNG ĐẾM VÀ CẬP NHẬT SỐ KẾT QUẢ THEO THỰC TẾ TRANG
    const countTextElement = document.getElementById("product-count-text");
    if (countTextElement) {
      const totalResults = filteredProducts.length;
      if (totalResults === 0) {
        countTextElement.innerText =
          currentLang === "vi" ? "Hiển thị 0 kết quả" : "Showing 0 results";
      } else {
        const fromCount = startIndex + 1;
        const toCount = Math.min(
          startIndex + paginatedProducts.length,
          totalResults,
        );
        if (currentLang === "vi") {
          countTextElement.innerText = `Hiển thị ${fromCount}–${toCount} của ${totalResults} kết quả`;
        } else {
          countTextElement.innerText = `Showing ${fromCount}–${toCount} of ${totalResults} results`;
        }
      }
    }

    // Nếu không tìm thấy sản phẩm nào
    if (filteredProducts.length === 0) {
      const emptyMsg =
        currentLang === "vi"
          ? "Hiện tại chưa có sản phẩm nào trong danh mục này."
          : "No products found in this category.";
      shopGrid.innerHTML = `<p style="text-align: center; grid-column: 1/-1; color: #64748b; padding: 40px 0;">${emptyMsg}</p>`;
      if (paginationContainer) paginationContainer.innerHTML = "";
      return;
    }

    // Duyệt qua danh sách sản phẩm để render HTML
    paginatedProducts.forEach((product) => {
      // Kiểm tra để hiển thị Badge "MỚI" nếu sản phẩm có type là new
      const newBadge =
        product.type === "new"
          ? `<span style="position: absolute; top: 10px; left: 10px; background: #ef4444; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; z-index: 2;">NEW</span>`
          : "";

      const btnText = currentLang === "vi" ? "LIÊN HỆ NGAY" : "CONTACT NOW";

      // 🌟 ĐÃ ĐỔI: product.name -> product.name[currentLang]
      htmlContent += `
        <div class="product-card" style="position: relative;">
          ${newBadge}
          <a href="detail.html?id=${product.id}" class="product-card-link">
            <div class="product-img-box">
              <img src="${product.image}" alt="${product.name[currentLang]}" />
            </div>
            
            <div class="product-info">
              <h4 class="product-card-title">
                ${product.name[currentLang]}
              </h4>
              
              <button class="btn-shop-contact">
                ${btnText}
              </button>
            </div>
          </a>
        </div>
      `;
    });

    shopGrid.innerHTML = htmlContent;

    // Dựng lại các nút số trang tương ứng
    setupPagination();

    // Thực hiện cuộn màn hình xuống vừa tầm mắt
    const shopHeader = document.querySelector(".shop-header");
    const targetElement = shopHeader || shopGrid;
    if (targetElement) {
      const offset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  // 3. HÀM DỰNG THANH SỐ TRANG TỰ ĐỘNG
  function setupPagination() {
    if (!paginationContainer) return;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    let paginationHtml = "";

    if (totalPages <= 1) {
      paginationContainer.innerHTML = "";
      return;
    }

    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === currentPage ? "active" : "";
      paginationHtml += `<a href="#" class="page-item ${activeClass}" data-page="${i}">${i}</a>`;
    }

    if (currentPage < totalPages) {
      paginationHtml += `<a href="#" class="page-item next-btn" data-page="${currentPage + 1}">&gt;</a>`;
    }

    paginationContainer.innerHTML = paginationHtml;

    const pageButtons = paginationContainer.querySelectorAll(".page-item");
    pageButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const targetPage = parseInt(this.getAttribute("data-page"));
        if (targetPage && targetPage !== currentPage) {
          renderPage(targetPage);
        }
      });
    });
  }

  // 4. HÀM XỬ LÝ LỌC SẢN PHẨM THEO DANH MỤC SIDEBAR
  function setupCategoryFilter() {
    categoryLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        categoryLinks.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");

        const selectedCategory = this.getAttribute("data-category");

        // Lọc danh mục mới đồng thời giữ nguyên bộ lọc sắp xếp hiện tại
        filterAndSortProducts(selectedCategory, currentSort);

        // Tự động đóng sidebar menu trên giao diện mobile
        const sidebar = document.querySelector(".sidebar");
        const overlay = document.querySelector(".sidebar-overlay");
        if (sidebar && sidebar.classList.contains("active")) {
          sidebar.classList.remove("active");
          if (overlay) overlay.classList.remove("active");
        }
      });
    });
  }

  // 5. HÀM LẮNG NGHE SỰ KIỆN THAY ĐỔI BỘ LỌC (MỚI NHẤT / CŨ NHẤT)
  function setupSortFilter() {
    if (!sortSelect) return;

    sortSelect.addEventListener("change", function () {
      const selectedSort = this.value;
      filterAndSortProducts(currentCategory, selectedSort);
    });
  }

  // Logic xử lý Menu Mobile (NÚT BA GẠCH)
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenu.classList.toggle("is-active");
    });
  }
});
