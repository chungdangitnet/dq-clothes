const swiper = new Swiper(".card-wrapper", {
  // Loop sẽ chỉ hoạt động nếu bạn có nhiều hơn 4 slide (theo config này)
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  // Thêm dòng này để fix lỗi "Warning loop" nếu số lượng slide ít
  loopAddCards: true,

  // Phân trang
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Nút điều hướng
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const menuToggle = document.querySelector("#mobile-menu");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("is-active"); // Để làm hiệu ứng dấu X cho nút
});
document.addEventListener("DOMContentLoaded", function () {
  const heroSwiper = new Swiper(".hero-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000, // Chuyển sau 4 giây
      disableOnInteraction: false,
    },
    // Hiệu ứng trượt ngang mặc định
    direction: "horizontal",

    // Cấu hình dấu chấm phân trang
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Cho phép người dùng bấm vào dấu chấm để chuyển
    },
  });
});
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  // Thêm hoặc xóa class 'active'
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  // Ngăn cuộn trang khi đang mở menu
  document.body.style.overflow = sidebar.classList.contains("active")
    ? "hidden"
    : "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. TỰ ĐỘNG RENDER SẢN PHẨM TỪ DATA.JS
  // ==========================================
  const cardList = document.querySelector(".card-list");

  // Kiểm tra nếu đang ở trang chủ (có thẻ .card-list) và dữ liệu products tồn tại
  if (cardList && typeof products !== "undefined") {
    let htmlResult = "";
    const newProducts = products.filter((product) => product.type === "new");

    newProducts.slice(0, 6).forEach((product) => {
      // Mỗi sản phẩm click vào sẽ tự truyền đúng ID sang trang detail.html
      htmlResult += `
        <li class="card-item swiper-slide">
          <a href="detail.html?id=${product.id}" class="card-link" style="text-decoration: none; color: inherit; display: block;">
            <img src="${product.image}" alt="${product.name}" class="card-imge" />
            <h3 class="card-title">${product.name}</h3>
            <button class="btn-contact" style="pointer-events: none;">Liên hệ ngay</button>
          </a>
        </li>
      `;
    });

    // Đổ dữ liệu HTML vào trước khi khởi tạo Swiper
    cardList.innerHTML = htmlResult;
  }

  // ==========================================
  // 2. KHỞI TẠO SWIPER SẢN PHẨM (MỚI)
  // ==========================================
  if (document.querySelector(".card-wrapper")) {
    const swiper = new Swiper(".card-wrapper", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      loopAddCards: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      },
    });
  }

  // ==========================================
  // 3. KHỞI TẠO HERO BANNER SLIDER
  // ==========================================
  if (document.querySelector(".hero-slider")) {
    const heroSwiper = new Swiper(".hero-slider", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // ==========================================
  // 4. ĐIỀU KHIỂN MENU MOBILE
  // ==========================================
  const menuToggle = document.querySelector("#mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("is-active");
    });
  }
});

// Hàm toggleSidebar (nếu bạn sử dụng nút riêng ngoài menu)
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  if (sidebar && overlay) {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = sidebar.classList.contains("active")
      ? "hidden"
      : "auto";
  }
}
