// Nội dung của file detail.js độc lập - Đã tích hợp tự động đổi tên Breadcrumb
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Chỉ tìm kiếm khi biến products từ data.js đã sẵn sàng
  if (typeof products !== "undefined" && productId) {
    const product = products.find((p) => p.id === productId);
    const detailContainer = document.getElementById("dynamic-product-detail");

    if (product && detailContainer) {
      // 1. Cập nhật tiêu đề Tab trình duyệt
      document.title = product.name + " - DQ Uniform";

      // ---- ĐOẠN TÍNH NĂNG MỚI: TỰ ĐỘNG ĐỔI TÊN SẢN PHẨM TRÊN THANH ĐIỀU HƯỚNG ----
      const breadcrumbProductName = document.getElementById(
        "breadcrumb-product-name",
      );
      if (breadcrumbProductName) {
        breadcrumbProductName.innerText = product.name;
      }

      // 2. Đổ dữ liệu chi tiết sản phẩm vào giao diện HTML
      detailContainer.innerHTML = `
                <div class="product-detail-container">
                    <div class="detail-left-col">
                        <div class="main-image-box">
                            <img src="${product.image}" alt="${product.name}" />
                        </div>
                    </div>
                    <div class="detail-right-col">
                        <h1>${product.name}</h1>
                        <div class="detail-short-desc">${product.desc}</div>
                        <div class="action-buttons-group">
                            <a href="tel:0888868025" class="btn-large-blue">LIÊN HỆ NGAY 0888868025</a>
                            <div class="btn-two-columns">
                                <a href="https://zalo.me/0971067676" target="_blank" class="btn-sub-zalo">📞 Liên Hệ Qua Zalo</a>
                                <a href="https://www.facebook.com/messages/t/61557919410699" class="btn-sub-hotline">Nhắn Messenger</a>
                            </div>
                        </div>
                        <a href="#" class="size-guide-link">Hướng dẫn chọn size</a>
                        <div class="contact-info-block">
                            <h3>ĐỂ ĐƯỢC TƯ VẤN VÀ ĐẶT HÀNG, VUI LÒNG LIÊN HỆ:</h3>
                            <ul class="info-list-items">
                                <li><strong>Hotline:</strong> <span class="highlight-red">0888868025</span></li>
                                <li><strong>Email:</strong> <span class="highlight-red">dqunisex@gmail.com</span></li>
                                <li><strong>Địa chỉ:</strong> 176/6m Đường Ấp Đông 1-2, Đông Thạnh, Hồ Chí Minh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="product-info-sections-wrapper">
          
          <div class="info-content-block">
            <h2>1. Chất liệu sản phẩm</h2>
            <p>Sản phẩm được gia công từ các dòng vải tuyển chọn, đảm bảo tối đa sự thoải mái cho người mặc:</p>
            <ul style="padding-left: 20px; margin-bottom: 0;">
              <li style="margin-bottom: 8px;"><strong>Vải Thun Cotton 100%:</strong> Thấm hút mồ hôi cực tốt, co giãn 4 chiều mượt mà, bề mặt vải mịn không xù lông.</li>
              <li style="margin-bottom: 8px;"><strong>Vải Cá Sấu (Pique):</strong> Đứng dáng áo, lịch sự, thích hợp cho môi trường công sở, văn phòng, nhà hàng.</li>
              <li><strong>Độ bền màu:</strong> Sử dụng công nghệ nhuộm hoạt tính, cam kết không phai màu hay loang lổ khi giặt máy hoặc giặt tay thông thường.</li>
            </ul>
          </div>

          <div class="info-content-block">
            <h2>2. Giá sản phẩm & Chính sách báo giá</h2>
            <p style="margin-bottom: 15px;">
              Tại <strong>DQ Uniform</strong>, tất cả sản phẩm đồng phục đều được may đo và thiết kế riêng theo yêu cầu. Chính vì vậy, giá thành sản phẩm cuối cùng sẽ không cố định mà **phụ thuộc hoàn toàn vào các yếu tố cốt lõi** sau:
            </p>
            <ul style="padding-left: 20px; line-height: 1.8;">
              <li style="margin-bottom: 10px;">
                <strong>Chất liệu vải lựa chọn:</strong> Mỗi dòng vải (Thun Cotton 100%, thun Cá Sấu Pique, vải thun mè, thun cá sấu Poly...) sẽ có chi phí nguyên vật liệu khác nhau dựa trên độ dày dặn và tỷ lệ cotton.
              </li>
              <li style="margin-bottom: 10px;">
                <strong>Số lượng đơn hàng:</strong> Xưởng áp dụng chính sách chiết khấu thương mại cực tốt cho doanh nghiệp. **Đặt may số lượng càng lớn, giá thành trên mỗi sản phẩm càng rẻ.**
              </li>
              <li style="margin-bottom: 10px;">
                <strong>Quy cách in/thêu Logo:</strong> Chi phí sẽ được tính toán dựa trên kích thước hình in, số lượng màu sắc và công nghệ lựa chọn (In kỹ thuật số, in lụa, thêu vi tính độ nét cao).
              </li>
            </ul>
            
            <div style="margin-top: 20px; background-color: #fff9db; border-left: 4px solid #fab005; padding: 15px; border-radius: 4px;">
              <strong style="color: #f59f00; display: block; margin-bottom: 5px; font-size: 14px;">💡 NHẬN BÁO GIÁ CHÍNH XÁC SAU 5 PHÚT:</strong>
              <span style="font-size: 13.5px; color: #495057;">
                Quý khách hàng vui lòng nhấn vào nút <strong>"Liên hệ qua Zalo"</strong> hoặc gọi trực tiếp Hotline <strong style="color: #dc3545;">0888868025</strong>, gửi số lượng dự kiến và mẫu logo để nhân viên tư vấn của xưởng tính toán và gửi bảng báo giá tối ưu nhất!
              </span>
            </div>
          </div>

          <div class="info-content-block">
            <h2>3. Bảng lựa chọn size</h2>
            <p>Vui lòng đối chiếu các thông số chiều cao và cân nặng dưới đây để chọn được size áo vừa vặn, tôn dáng nhất:</p>
            <div class="size-image-box" style="margin-top: 15px; max-width: 650px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
              <img src="image/size board.jpg" alt="Bảng chọn size đồng phục DQ Uniform" style="width: 100%; height: auto; display: block;" />
            </div>
          </div>

        </div>
      `;
    } else {
      detailContainer.innerHTML = `<h2 style="text-align:center; padding: 50px;">⚠️ Không tìm thấy sản phẩm!</h2>`;
    }
  }
});
