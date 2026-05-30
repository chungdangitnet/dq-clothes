document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("lang-toggle");

  // 1. Xác định ngôn ngữ hiện tại từ bộ nhớ máy (Mặc định là "vi")
  let currentLang = localStorage.getItem("language") || "vi";

  // Đồng bộ hóa trạng thái của nút gạt ngay khi vừa tải trang
  if (langToggle) {
    langToggle.checked = currentLang === "en";
  }

  // Luôn thực hiện dịch các từ khóa tĩnh trên giao diện khi tải trang
  applyLanguage(currentLang);

  // 2. Lắng nghe sự kiện gạt nút chuyển đổi ngôn ngữ
  if (langToggle) {
    langToggle.addEventListener("change", function () {
      const selectedLang = this.checked ? "en" : "vi";
      localStorage.setItem("language", selectedLang); // Lưu ngôn ngữ mới vào bộ nhớ máy

      // Cách tối ưu và sạch nhất cho hệ thống đa trang:
      // Tải lại trang để áp dụng ngôn ngữ mới cho cả text tĩnh lẫn dữ liệu render động
      window.location.reload();
    });
  }
});

// Hàm quét các thuộc tính data-i18n trên giao diện để đổi chữ
function applyLanguage(lang) {
  // Kiểm tra xem kho từ vựng translations từ data.js đã sẵn sàng chưa
  if (typeof translations === "undefined" || !translations[lang]) return;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translatedText = translations[lang][key];

    if (translatedText) {
      // 1. Nếu là ô INPUT tìm kiếm, ta đổi Placeholder
      if (el.tagName === "INPUT" && el.getAttribute("type") === "text") {
        el.setAttribute("placeholder", translatedText);
      }
      // 2. Nếu là nút bấm INPUT hoặc BUTTON có thuộc tính value
      else if (
        (el.tagName === "INPUT" && el.type === "button") ||
        el.tagName === "BUTTON"
      ) {
        if (el.hasAttribute("value")) {
          el.value = translatedText;
        } else {
          el.innerText = translatedText;
        }
      }
      // 3. Các thẻ hiển thị văn bản thông thường (A, SPAN, H1, H2, H3, H4, P...)
      else {
        el.innerText = translatedText;
      }
    }
  });
}
