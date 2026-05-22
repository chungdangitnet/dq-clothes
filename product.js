document.addEventListener("DOMContentLoaded", function () {
  const shopGrid = document.getElementById("shop-product-grid");
  const paginationContainer = document.querySelector(".pagination-product");
  const categoryLinks = document.querySelectorAll(".category-link");
  const sortSelect = document.querySelector(".sort-select"); // Định vị khung chọn bộ lọc mới/cũ

  // CẤU HÌNH PHÂN TRANG VÀ BỘ LỌC
  const productsPerPage = 12;
  let currentPage = 1;
  let baseOldProducts = []; // Khối sản phẩm gốc (chỉ chứa type: "old")
  let filteredProducts = []; // Khối sản phẩm thực tế hiển thị sau khi Lọc & Sắp xếp

  let currentCategory = "all"; // Lưu trạng thái danh mục hiện tại
  let currentSort = "newest"; // Lưu trạng thái sắp xếp hiện tại ("newest" hoặc "oldest")

  // 1. Kiểm tra kho dữ liệu và tiến hành khởi tạo ban đầu
  if (typeof products !== "undefined" && shopGrid) {
    // Bước lọc cốt lõi: Chỉ lấy các sản phẩm có type là "old"
    baseOldProducts = products.filter((product) => product.type === "old");

    // Chạy bộ lọc và sắp xếp mặc định lần đầu tiên
    filterAndSortProducts(currentCategory, currentSort);

    // Kích hoạt bộ lắng nghe sự kiện Click chọn danh mục Sidebar
    setupCategoryFilter();

    // Kích hoạt bộ lắng nghe sự kiện Thay đổi kiểu sắp xếp (Mới nhất / Cũ nhất)
    setupSortFilter();
  }

  // HÀM TRUNG GIAN: XỬ LÝ ĐỒNG THỜI CẢ LỌC DANH MỤC VÀ SẮP XẾP MỚI/CŨ
  function filterAndSortProducts(category, sortOrder) {
    currentCategory = category;
    currentSort = sortOrder;

    // Bước A: Lọc theo danh mục trước
    if (category === "all" || !category) {
      filteredProducts = [...baseOldProducts]; // Lấy toàn bộ sản phẩm gốc ban đầu
    } else {
      filteredProducts = baseOldProducts.filter(
        (product) => product.category === category,
      );
    }

    // Bước B: Sắp xếp theo yêu cầu (Mới nhất giữ nguyên, Cũ nhất đảo ngược mảng)
    if (sortOrder === "oldest") {
      filteredProducts.reverse(); // Đảo ngược mảng để đưa các sản phẩm cuối cùng lên trang 1
    }

    // Bước C: Reset về trang 1 và render lại giao diện mới
    renderPage(1);
  }

  // 2. HÀM HIỂN THỊ SẢN PHẨM THEO TRANG ĐƯỢC CHỈ ĐỊNH
  function renderPage(page) {
    currentPage = page;
    let htmlContent = "";

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // TỰ ĐỘNG ĐẾM VÀ CẬP NHẬT SỐ KẾT QUẢ THEO THỰC TẾ TRANG
    const countTextElement = document.getElementById("product-count-text");
    if (countTextElement) {
      const totalResults = filteredProducts.length;
      if (totalResults === 0) {
        countTextElement.innerText = "Hiển thị 0 kết quả";
      } else {
        const fromCount = startIndex + 1;
        const toCount = Math.min(
          startIndex + paginatedProducts.length,
          totalResults,
        );
        countTextElement.innerText = `Hiển thị ${fromCount}–${toCount} của ${totalResults} kết quả`;
      }
    }

    // Nếu không tìm thấy sản phẩm nào
    if (filteredProducts.length === 0) {
      shopGrid.innerHTML = `<p style="text-align: center; grid-column: 1/-1; color: #64748b; padding: 40px 0;">Hiện tại chưa có sản phẩm nào trong danh mục này.</p>`;
      if (paginationContainer) paginationContainer.innerHTML = "";
      return;
    }

    // Duyệt qua danh sách sản phẩm để render HTML
    paginatedProducts.forEach((product) => {
      htmlContent += `
    <div class="product-card">
          <a href="detail.html?id=${product.id}" class="product-card-link">
            <div class="product-img-box">
              <img src="${product.image}" alt="${product.name}" />
            </div>
            
            <div class="product-info">
              <h4 class="product-card-title">
                ${product.name}
              </h4>
              
              <button class="btn-shop-contact">
                LIÊN HỆ NGAY
              </button>
            </div>
          </a>
        </div>
  `;
    });

    shopGrid.innerHTML = htmlContent;

    // Dựng lại các nút số trang tương ứng
    setupPagination();

    // Thực hiện cuộn màn hình xuống vừa tầm mắt (có trừ offset khoảng trống phía trên)
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

        // Gọi hàm trung gian để lọc lại danh mục nhưng vẫn giữ nguyên kiểu sắp xếp (Mới nhất/Cũ nhất) đang chọn
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
      const selectedSort = this.value; // Lấy giá trị "newest" hoặc "oldest"

      // Gọi hàm trung gian để sắp xếp lại danh sách dựa trên danh mục hiện tại đang xem
      filterAndSortProducts(currentCategory, selectedSort);
    });
  }

  // Logic xử lý Menu Mobile (NÚT BA GẠCH) - GIỮ NGUYÊN CỦA BẠN
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenu.classList.toggle("is-active");
    });
  }
});

// Hàm hỗ trợ bật tắt thanh lọc danh mục trên thiết bị di động - GIỮ NGUYÊN CỦA BẠN
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  if (sidebar && overlay) {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}
