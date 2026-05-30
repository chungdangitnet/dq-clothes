// Nội dung của file detail.js độc lập - Đã tối ưu hóa dữ liệu động theo danh mục sản phẩm và tích hợp đa ngôn ngữ toàn diện
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Chỉ tìm kiếm khi biến products từ data.js đã sẵn sàng
  if (typeof products !== "undefined" && productId) {
    const product = products.find((p) => p.id === productId);
    const detailContainer = document.getElementById("dynamic-product-detail");

    if (product && detailContainer) {
      // 🌟 LẤY NGÔN NGỮ HIỆN TẠI ĐỂ RENDER ĐÚNG CHỮ
      const currentLang = localStorage.getItem("language") || "vi";

      // 1. Cập nhật tiêu đề Tab trình duyệt
      document.title = product.name[currentLang] + " - DQ Uniform";

      // 2. Tự động đổi tên sản phẩm trên thanh điều hướng (Breadcrumb)
      const breadcrumbProductName = document.getElementById(
        "breadcrumb-product-name",
      );
      if (breadcrumbProductName) {
        breadcrumbProductName.innerText = product.name[currentLang];
      }

      // 🌟 TẠO TẬP HỢP TỪ ĐIỂN TĨNH CHO CÁC ĐOẠN VĂN BẢN TRONG TRANG DETAIL
      const translations = {
        vi: {
          btnContactNow: `LIÊN HỆ NGAY 0888868025`,
          btnZalo: `📞 Liên Hệ Qua Zalo`,
          btnMessenger: `Nhắn Messenger`,
          sizeGuide: `Hướng dẫn chọn size`,
          contactTitle: `ĐỂ ĐƯỢC TƯ VẤN VÀ ĐẶT HÀNG, VUI LÒNG LIÊN HỆ:`,
          lblHotline: `Hotline:`,
          lblEmail: `Email:`,
          lblAddress: `Địa chỉ:`,
          lblAddressText: `176/6m Đường Ấp Đông 1-2, Đông Thạnh, Hồ Chí Minh`,

          secMaterialTitle: `1. Chất liệu sản phẩm`,
          secMaterialDesc: `Sản phẩm <strong>${product.name[currentLang]}</strong> được gia công tỉ mỉ từ nguồn vải đạt chuẩn, tối ưu hóa theo mục đích sử dụng:`,

          secPriceTitle: `2. Giá sản phẩm & Chính sách báo giá`,
          secPriceDesc: `Tại <strong>DQ Uniform</strong>, tất cả sản phẩm đồng phục đều được may đo và thiết kế riêng theo yêu cầu. Chính vì vậy, giá thành sản phẩm cuối cùng sẽ không cố định mà **phụ thuộc hoàn toàn vào các yếu tố cốt lõi** sau:`,
          priceFactor1: `<strong>Chất liệu vải lựa chọn:</strong> Mỗi dòng vải (Thun Cotton, thun Cá Sấu Pique, vải thun mè...) sẽ có chi phí nguyên vật liệu khác nhau dựa trên độ dày dặn và tỷ lệ cotton.`,
          priceFactor2: `<strong>Số lượng đơn hàng:</strong> Xưởng áp dụng chính sách chiết khấu thương mại cực tốt cho doanh nghiệp. **Đặt may số lượng càng lớn, giá thành trên mỗi sản phẩm càng rẻ.**`,
          priceFactor3: `<strong>Quy cách in/thêu Logo:</strong> Chi phí sẽ được tính toán dựa trên kích thước hình in, số lượng màu sắc và công nghệ lựa chọn (In kỹ thuật số, in lụa, thêu vi tính độ nét cao).`,

          quoteTitle: `💡 NHẬN BÁO GIÁ CHÍNH XÁC SAU 5 PHÚT:`,
          quoteText: `Quý khách hàng vui lòng nhấn vào nút <strong>"Liên hệ qua Zalo"</strong> hoặc gọi trực tiếp Hotline <strong style="color: #dc3545;">0888868025</strong>, gửi số lượng dự kiến và mẫu logo để nhân viên tư vấn của xưởng tính toán và gửi bảng báo giá tối ưu nhất!`,

          secSizeTitle: `3. Bảng lựa chọn size`,
          secSizeDesc: `Vui lòng đối chiếu các thông số chiều cao và cân nặng dưới đây để chọn được size áo vừa vặn, tôn dáng nhất:`,
          sizeAlt: `Bảng chọn size đồng phục DQ Uniform`,
          sizeImg: `image/size board-vie.jpg`,
          notFound: `⚠️ Không tìm thấy sản phẩm!`,
        },
        en: {
          btnContactNow: `CONTACT NOW 0888868025`,
          btnZalo: `📞 Contact via Zalo`,
          btnMessenger: `Message`,
          sizeGuide: `Size Guide`,
          contactTitle: `FOR ADVICE AND ORDERING, PLEASE CONTACT:`,
          lblHotline: `Hotline:`,
          lblEmail: `Email:`,
          lblAddress: `Address:`,
          lblAddressText: `176/6m Ap Dong 1-2 Street, Dong Thanh, Ho Chi Minh City`,

          secMaterialTitle: `1. Product Material`,
          secMaterialDesc: `The product <strong>${product.name[currentLang]}</strong> is meticulously manufactured from standard fabric sources, optimized for the purpose of use:`,

          secPriceTitle: `2. Product Price & Quotation Policy`,
          secPriceDesc: `At <strong>DQ Uniform</strong>, all uniform products are custom-made and designed according to requirements. Therefore, the final product price is not fixed but **depends entirely on the following core factors**:`,
          priceFactor1: `<strong>Selected fabric material:</strong> Each line of fabric (Cotton, Pique Crocodile fabric, mesh fabric...) will have different raw material costs based on thickness and cotton percentage.`,
          priceFactor2: `<strong>Order Quantity:</strong> Our workshop applies an excellent commercial discount policy for businesses. **The larger the order quantity, the cheaper the unit price per product.**`,
          priceFactor3: `<strong>Logo printing/embroidery specifications:</strong> Costs will be calculated based on the size of the print, the number of colors, and the chosen technology (Digital printing, silk screen printing, high-definition computer embroidery).`,

          quoteTitle: `💡 GET AN ACCURATE QUOTE WITHIN 5 MINUTES:`,
          quoteText: `Please click on the <strong>"Contact via Zalo"</strong> button or call the Hotline directly at <strong style="color: #dc3545;">0888868025</strong>, send the estimated quantity and logo design so our factory consultants can calculate and send the most optimized quotation!`,

          secSizeTitle: `3. Size Selection Chart`,
          secSizeDesc: `Please compare the height and weight parameters below to choose the most suitable and well-fitting shirt size:`,
          sizeAlt: `DQ Uniform sizing selection chart`,
          sizeImg: `image/size board-eng.png`,
          notFound: `⚠️ Product not found!`,
        },
      };

      const lang = translations[currentLang];

      // 3. Hàm phụ trợ xử lý nội dung chất liệu vải động theo từng nhóm sản phẩm (category) tích hợp Đa ngôn ngữ
      let materialHTML = "";
      switch (product.category) {
        case "mam-non":
          materialHTML =
            currentLang === "vi"
              ? `
            <li style="margin-bottom: 8px;"><strong>Vải Cotton 100% tự nhiên:</strong> Thấm hút mồ hôi cực tốt, an toàn, dịu nhẹ và không gây kích ứng cho làn da nhạy cảm của các bé.</li>
            <li style="margin-bottom: 8px;"><strong>Vải Thun Cá Sấu Mềm:</strong> Co giãn 4 chiều linh hoạt, giúp các bé thoải mái vận động, vui chơi suốt ngày dài.</li>
            <li><strong>Mực in an toàn:</strong> Sử dụng công nghệ in đạt chuẩn, cam kết không bong tróc, không chứa chất độc hại.</li>
          `
              : `
            <li style="margin-bottom: 8px;"><strong>100% Natural Cotton:</strong> Excellent sweat absorption, safe, gentle and non-irritating to babies' sensitive skin.</li>
            <li style="margin-bottom: 8px;"><strong>Soft Crocodile Fabric:</strong> Flexible 4-way stretch, helping babies move and play comfortably all day long.</li>
            <li><strong>Safe Ink:</strong> Using standard printing technology, committed to no peeling, containing no harmful substances.</li>
          `;
          break;
        case "cong-ty":
        case "thun-polo":
          materialHTML =
            currentLang === "vi"
              ? `
            <li style="margin-bottom: 8px;"><strong>Vải Cá Sấu Pique Cao Cấp:</strong> Đứng dáng áo, lịch sự, chuyên nghiệp, tạo ấn tượng tốt với khách hàng và đối tác.</li>
            <li style="margin-bottom: 8px;"><strong>Vải Thun Lạnh / Poly:</strong> Bề mặt mịn màng, chống nhăn cực tốt, dễ giặt ủi, rất phù hợp cho khối văn phòng, nhà hàng.</li>
            <li><strong>Độ bền màu cao:</strong> Công nghệ nhuộm hoạt tính hiện đại giúp áo bền màu qua nhiều lần giặt.</li>
          `
              : `
            <li style="margin-bottom: 8px;"><strong>Premium Pique Crocodile Fabric:</strong> Keeps the shirt's shape well, polite, professional, creating a good impression with clients and partners.</li>
            <li style="margin-bottom: 8px;"><strong>Cold Spandex / Poly Fabric:</strong> Smooth surface, excellent wrinkle resistance, easy to wash and iron, very suitable for office and restaurant staff.</li>
            <li><strong>High color fastness:</strong> Modern active dyeing technology helps the shirt retain color through many washes.</li>
          `;
          break;
        case "the-thao":
        case "team-building":
          materialHTML =
            currentLang === "vi"
              ? `
            <li style="margin-bottom: 8px;"><strong>Vải Mè Thái / Mè Kim:</strong> Cấu trúc hạt mè thông thoáng, siêu nhẹ, thoát nhiệt và mồ hôi cực nhanh khi vận động cường độ cao.</li>
            <li style="margin-bottom: 8px;"><strong>Độ co giãn tuyệt đối:</strong> Sợi vải tích hợp thành phần Spandex giúp co giãn thoải mái, không gây gò bó.</li>
            <li><strong>Công nghệ in chuyển nhiệt:</strong> Hình in sắc nét chìm vào vải, bao giặt máy, không lo bay màu hay nứt nẻ.</li>
          `
              : `
            <li style="margin-bottom: 8px;"><strong>Thai Mesh / Birdseye Mesh Fabric:</strong> Breathable mesh structure, ultra-lightweight, extremely fast heat and sweat dispersion during high-intensity activities.</li>
            <li style="margin-bottom: 8px;"><strong>Absolute Elasticity:</strong> Fabric integrated with Spandex components provides comfortable stretch without constraints.</li>
            <li><strong>Sublimation Printing Technology:</strong> Sharp prints infused into the fabric, machine wash safe, no worry about fading or cracking.</li>
          `;
          break;
        default: // Dành cho các sản phẩm mới (chưa có category) hoặc đồ họp lớp
          materialHTML =
            currentLang === "vi"
              ? `
            <li style="margin-bottom: 8px;"><strong>Vải Cotton Tuyển Chọn:</strong> Chất vải dày dặn, mềm mại, thoáng khí, đem lại cảm giác dễ chịu khi mặc hằng ngày.</li>
            <li style="margin-bottom: 8px;"><strong>Đường may tỉ mỉ:</strong> Tiêu chuẩn may xuất khẩu, các đường chỉ dập khít chắc chắn, hạn chế tối đa tình trạng bung sổ.</li>
            <li><strong>Xử lý chống co rút:</strong> Vải đã qua xử lý nhiệt giúp giữ nguyên form dáng chuẩn sau khi giặt.</li>
          `
              : `
            <li style="margin-bottom: 8px;"><strong>Selected Cotton Fabric:</strong> Thick, soft, and breathable fabric, providing a comfortable feeling for daily wear.</li>
            <li style="margin-bottom: 8px;"><strong>Meticulous Stitching:</strong> Export sewing standards, tightly locked stitch lines, minimizing thread fraying.</li>
          	<li><strong>Anti-shrinkage treatment:</strong> Heat-treated fabric helps maintain the standard form after washing.</li>
          `;
      }

      // 4. Đổ toàn bộ dữ liệu vào cấu trúc giao diện HTML sử dụng các biến từ điển đã bóc tách
      detailContainer.innerHTML = `
        <div class="product-detail-container">
            <div class="detail-left-col">
                <div class="main-image-box">
                    <img src="${product.image}" alt="${product.name[currentLang]}" />
                </div>
            </div>
            <div class="detail-right-col">
                <h1>${product.name[currentLang]}</h1>
                <div class="detail-short-desc">${product.desc[currentLang]}</div>
                <div class="action-buttons-group">
                    <a href="tel:0888868025" class="btn-large-blue">${lang.btnContactNow}</a>
                    <div class="btn-two-columns">
                        <a href="https://zalo.me/0971067676" target="_blank" class="btn-sub-zalo">${lang.btnZalo}</a>
                        <a href="https://www.facebook.com/messages/t/61557919410699" target="_blank" class="btn-sub-hotline">${lang.btnMessenger}</a>
                    </div>
                </div>
                <a href="#size-section" class="size-guide-link">${lang.sizeGuide}</a>
                <div class="contact-info-block">
                    <h3>${lang.contactTitle}</h3>
                    <ul class="info-list-items">
                        <li><strong>${lang.lblHotline}</strong> <span class="highlight-red">0888868025</span></li>
                        <li><strong>${lang.lblEmail}</strong> <span class="highlight-red">dqunisex@gmail.com</span></li>
                        <li><strong>${lang.lblAddress}</strong> ${lang.lblAddressText}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="product-info-sections-wrapper">
          <div class="info-content-block">
            <h2>${lang.secMaterialTitle}</h2>
            <p>${lang.secMaterialDesc}</p>
            <ul style="padding-left: 20px; margin-bottom: 0;">
              ${materialHTML}
            </ul>
          </div>

          <div class="info-content-block">
            <h2>${lang.secPriceTitle}</h2>
            <p style="margin-bottom: 15px;">${lang.secPriceDesc}</p>
            <ul style="padding-left: 20px; line-height: 1.8;">
              <li style="margin-bottom: 10px;">${lang.priceFactor1}</li>
              <li style="margin-bottom: 10px;">${lang.priceFactor2}</li>
              <li style="margin-bottom: 10px;">${lang.priceFactor3}</li>
            </ul>
            
            <div style="margin-top: 20px; background-color: #fff9db; border-left: 4px solid #fab005; padding: 15px; border-radius: 4px;">
              <strong style="color: #f59f00; display: block; margin-bottom: 5px; font-size: 14px;">${lang.quoteTitle}</strong>
              <span style="font-size: 13.5px; color: #495057;">${lang.quoteText}</span>
            </div>
          </div>

          <div class="info-content-block" id="size-section">
            <h2>${lang.secSizeTitle}</h2>
            <p>${lang.secSizeDesc}</p>
            <div class="size-image-box" style="margin-top: 15px; max-width: 650px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
             <img src="${lang.sizeImg}" alt="${lang.sizeAlt}" style="width: 100%; height: auto; display: block;" />
            </div>
          </div>
        </div>
      `;
    } else {
      const errorLang = localStorage.getItem("language") || "vi";
      const errorMsg =
        errorLang === "vi"
          ? `⚠️ Không tìm thấy sản phẩm!`
          : `⚠️ Product not found!`;
      detailContainer.innerHTML = `<h2 style="text-align:center; padding: 50px;">${errorMsg}</h2>`;
    }
  }
});
