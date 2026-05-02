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
