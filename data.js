// 1. ĐỐI TƯỢNG CHỨA CÁC TỪ KHÓA TĨNH (Dùng cho file lang.js để dịch khung giao diện)
const translations = {
  vi: {
    navHome: "Trang chủ",
    navProducts: "Sản phẩm",
    navNews: "Tin tức",
    searchPlaceholder: "Tìm kiếm",
    searchBtn: "Tìm kiếm",
    hotlineTop: "Tư vấn ngay",
    ftColContact: "Thông tin liên hệ",
    ftColQuickLinks: "Liên kết nhanh",
    ftColGuides: "Thông tin hướng dẫn",
    ftColCat: "Danh mục sản phẩm",
    btnContact: "Liên hệ ngay",
    titleNewProducts: "SẢN PHẨM MỚI",
    titleCategories: "DANH MỤC SẢN PHẨM",
    catCompany: "Đồng phục công ty",
    catSport: "Đồng phục thể thao",
    catConstruction: "Đồng phục công trình",
    catTeamBuilding: "Đồng phục Team Building",
    catJacket: "Áo khoác đồng phục",
    catApron: "Tạp dề đồng phục",
    titleAboutUs: "VỀ CHÚNG TÔI",
    sortNewest: "Mới nhất",
    sortOldest: "Cũ nhất",
    catAll: "Tất cả sản phẩm",
    catHopLop: "Đồng phục họp lớp",
    sidebarTitleSupport: "Hỗ trợ tư vấn",
    heroZaloTop: "TƯ VẤN QUA",
    aboutContent:
      "Đồng phục DQ Clothes là sự kết hợp hoàn hảo giữa thiết kế thời thượng, chất liệu cao cấp và kỹ thuật may tinh xảo, giúp nâng tầm diện mạo và khẳng định bản sắc riêng cho mọi doanh nghiệp.",
    titleNews: "TIN TỨC",
    newsMainTitle: "99+ Mẫu Túi Tote Vải In Theo Yêu Cầu, Chất Lượng Và Giá Rẻ",
    newsMainDesc:
      "Các mẫu túi tote vải đã trở thành một món phụ kiện quen thuộc trong tủ đồ của nhiều người. Sở hữu thiết kế đơn giản, rộng rãi kết hợp chất liệu bền bỉ",
    newsItemTitle1: "Feedback Đồng Phục B-F E.Bike: Năng Động Và Chuyên Nghiệp",
    newsItemDesc1:
      "Đồng phục B-F E.Bike là một sản phẩm đầy tâm huyết của Đồng phục DQ...",
    newsItemTitle2: "Feedback Đồng Phục Họp Lớp – Lớp A6 Trường THPT Yên Hòa",
    newsItemDesc2:
      "Trong sắc áo cam của mẫu đồng phục họp lớp A6 THPT Yên Hòa, tập...",
    newsItemTitle3: "Feedback Mẫu Áo Đồng Phục Giải Golf Vũ Võ Toàn Quốc",
    newsItemDesc3:
      "Mẫu đồng phục giải Golf Vũ Võ toàn quốc 2025 là sản phẩm đầy tâm...",
    wholesaleBtn: "NHẬN SỈ ÁO THUN - LIÊN HỆ NGAY",
    newsletterText: "Cập nhật thiết kế mới, ưu đãi độc quyền!",
    gPayment: "Hướng dẫn thanh toán",
    gSize: "Hướng dẫn chọn size",
    gOrder: "Hướng dẫn đặt hàng",
    gWarranty: "Chính sách bảo hành hoàn tiền",
    gPurchase: "Chính sách mua hàng",
    gDelivery: "Chính sách giao hàng",
    ftContactLink: "Liên hệ",
    btnZaloSidebar: "Nhắn qua Zalo",
    btnCallSidebar: "Gọi ngay",
    breadcrumbNews: "Tin tức thời trang DQ",
    newsIntroTitle: "TIN TỨC THỜI TRANG DQ UNIFORM",
    heroPhoneTop: "HOTLINE HỖ TRỢ",
    newsIntroDesc:
      "Chuyên mục tin tức mới nhất thời trang DQ Uniform sẽ đem đến kho dữ liệu vô cùng lớn cho khách hàng khi tham khảo những mẫu áo, quần đẹp và bắt trend.",
    // --- Bài viết nổi bật (Featured Post) ---
    fPostTitle: "Tổng Hợp 100+ Mẫu Đồng Phục Ngân Hàng Đẹp, Chuyên Nghiệp",
    fPostDesc:
      "Đồng phục ngân hàng là một yếu tố quan trọng giúp các ngân hàng tăng độ nhận diện thương hiệu. Một bộ đồng phục ngân hàng đẹp mắt và chỉn chu sẽ giúp các nhân viên xây dựng hình ảnh chuyên nghiệp...",

    // --- Danh sách bài viết xem nhiều (Sidebar) & Bài viết mới (Grid) ---
    sidePostTitle1:
      "Feedback Đồng Phục Canon: Đánh Dấu Cột Mốc 25 Năm Hoạt Động",
    sidePostTitle2:
      "Nhà Máy May Hải Anh Tại Hà Trung (Thanh Hóa) Chính Thức Đi Vào Hoạt Động",
    sidePostTitle3:
      "100+ Mẫu Áo Đồng Phục Team Building Du Lịch Đẹp Và Sáng Tạo",
    sidePostTitle4: "Đồng Phục Trường Tiểu Học Trung Yen Nổi Bật Với Tone Cam",
    sidePostTitle5: "40+ Mẫu Áo Đồng Phục Màu Đỏ Đẹp, Nổi Bật Và Thu Hút",

    // --- Mô tả ngắn các bài viết ở lưới phía dưới (Grid Cards Description) ---
    gridPostDesc1:
      "Đại kỷ niệm 25 năm thành lập, Công đoàn Canon Việt Nam đã lựa chọn...",
    gridPostDesc2:
      "Với định hướng mở rộng quy mô sản xuất và đáp ứng tốt hơn nhu...",
    gridPostDesc3:
      "Áo đồng phục Team Building hiện đang là xu hướng được nhiều doanh nghiệp...",
    gridPostDesc4:
      "Khám phá các thiết kế áo đồng phục sắc đỏ rực rỡ mang lại năng lượng tích cực...",
    gridPostTitle5:
      "Bí Quyết Chọn Vải May Áo Sơ Mi Đồng Phục Công Sở Không Nhăn",
    gridPostDesc5:
      "Lựa chọn chất liệu vải phù hợp giúp giữ form dáng áo sơ mi công sở luôn phẳng phiu...",
    gridPostTitle6: "Xu Hướng Thiết Kế Đồng Phục Học Sinh Tiểu Học Mới Nhất",
    gridPostDesc6:
      "Điểm qua những thay đổi lớn trong phong cách thiết kế đồng phục học đường năm nay...",
  },
  en: {
    navHome: "Home",
    navProducts: "Products",
    navNews: "News",
    searchPlaceholder: "Search",
    searchBtn: "Search",
    hotlineTop: "Contact Us",
    ftColContact: "Contact Info",
    ftColQuickLinks: "Quick Links",
    ftColGuides: "Guides & Policies",
    ftColCat: "Product Categories",
    btnContact: "Contact now",
    titleNewProducts: "NEW PRODUCTS",
    titleCategories: "Product Categories",
    catCompany: "Company uniform",
    catSport: "Sports uniforms",
    catConstruction: "Construction uniform",
    catTeamBuilding: "Team Building uniform",
    catJacket: "Uniform jacket",
    catApron: "Uniform apron",
    titleAboutUs: "ABOUT US",
    sortNewest: "Latest",
    sortOldest: "Oldest",
    catAll: "All products",
    heroZaloTop: "CONSULTATION VIA",
    sidebarTitleSupport: "Consulting support",
    catHopLop: "Class meeting uniform",
    aboutContent:
      "DQ Clothes uniforms are the perfect combination of trendy design, high-quality materials and sophisticated sewing techniques, helping to enhance the appearance and affirm the unique identity of every business.",
    titleNews: "NEWS",
    heroPhoneTop: "SUPPORT HOTLINE",
    newsMainTitle:
      "99+ Canvas Tote Bag Model Printed On Demand, Quality And Cheap Price",
    newsMainDesc:
      "Fabric tote bags have become a familiar accessory in many people's wardrobes. Possesses a simple, spacious design combined with durable materials",
    newsItemTitle1: "Feedback B-F E.Bike Uniforms: Dynamic and Professional",
    newsItemDesc1:
      "B-F E.Bike uniform is a passionate product of DQ Uniform...",
    newsItemTitle2:
      "Feedback Class Reunion Uniform – Class A6 Yen Hoa High School",
    newsItemDesc2:
      "In the orange shirt of Yen Hoa High School A6 class reunion uniform,...",
    newsItemTitle3: "Feedback Uniform Model for National Vu Vo Golf Tournament",
    newsItemDesc3:
      "The uniform model for the 2025 National Vu Vo Golf Tournament is a product filled with...",
    wholesaleBtn: "GET WHOLESALE T-SHIRTS - CONTACT NOW",
    newsletterText: "Update new designs, exclusive offers!",
    gPayment: "Payment instructions",
    gSize: "Instructions for choosing size",
    gOrder: "Ordering instructions",
    gWarranty: "Money back warranty policy",
    gPurchase: "Purchase policy",
    gDelivery: "Delivery policy",
    ftContactLink: "Contact",
    btnZaloSidebar: "Message via zalo",
    btnCallSidebar: "Call now",
    breadcrumbNews: "DQ fashion news",
    newsIntroTitle: "DQ UNIFORM FASHION NEWS",
    newsIntroDesc:
      "DQ Uniform's latest fashion news section will bring an extremely large data warehouse for customers to refer to beautiful and trendy shirt and pants designs.",
    // --- Tiêu đề các phân khu nội dung ---
    newsTitleFeatured: "Featured Articles",
    newsTitleMostViewed: "Most Viewed",
    newsTitleLatest: "Latest Articles",

    // --- Bài viết nổi bật (Featured Post) ---
    fPostTitle:
      "Collection of 100+ Beautiful and Professional Bank Uniform Models",
    fPostDesc:
      "Bank uniforms are an important factor helping banks increase brand identity. A beautiful and neat bank uniform will help employees build a professional image...",

    // --- Danh sách bài viết xem nhiều (Sidebar) & Bài viết mới (Grid) ---
    sidePostTitle1:
      "Canon Uniform Feedback: Marking the 25-Year Milestone of Operation",
    sidePostTitle2:
      "Hai Anh Garment Factory in Ha Trung (Thanh Hoa) Officially Comes into Operation",
    sidePostTitle3:
      "100+ Beautiful and Creative Travel Team Building Uniform Designs",
    sidePostTitle4:
      "Trung Yen Primary School Uniform Outstanding with Orange Tone",
    sidePostTitle5:
      "40+ Beautiful, Outstanding and Attractive Red Uniform Designs",

    // --- Mô tả ngắn các bài viết ở lưới phía dưới (Grid Cards Description) ---
    gridPostDesc1:
      "On the grand 25th anniversary of establishment, Canon Vietnam Trade Union selected...",
    gridPostDesc2:
      "With the orientation of expanding production scale and better meeting demand...",
    gridPostDesc3:
      "Team Building uniform shirts are currently a trend favored by many businesses...",
    gridPostDesc4:
      "Explore vibrant red uniform designs that bring positive energy...",
    gridPostTitle5:
      "Secrets to Choosing Wrinkle-Free Office Dress Shirt Fabrics",
    gridPostDesc5:
      "Choosing the right fabric helps keep office dress shirts smooth and well-shaped...",
    gridPostTitle6: "Latest Design Trends for Primary School Uniforms",
    gridPostDesc6:
      "Reviewing major changes in school uniform design styles this year...",
  },
};

// 2. MẢNG DỮ LIỆU SẢN PHẨM ĐA NGÔN NGỮ
const products = [
  // Sản phẩm mới
  {
    id: "ao-polo-dong-phuc-cong-ty-aircool-",
    name: {
      vi: "Áo polo đồng phục công ty aircool",
      en: "Aircool Company Uniform Polo Shirt",
    },
    image: "image/ao-polo-dong-phuc-cong-ty-aircool-03-mau-bich-1.jpg",
    desc: {
      vi: "Áo polo được làm từ chất liệu mát, mềm mại và thoáng khí, mang lại cảm giác dễ chịu khi mặc trong thời gian dài. Vải có khả năng thấm hút mồ hôi tốt, co giãn nhẹ và hạn chế bí nóng, phù hợp cho thời tiết hằng ngày cũng như các hoạt động ngoài trời.",
      en: "This polo shirt is made from a cool, soft, and breathable material, ensuring comfort for long hours of wear. The fabric features excellent moisture-wicking property, slight stretchability, and heat reduction, perfectly suited for daily wear and outdoor activities.",
    },
    type: "new",
  },
  {
    id: "ao-dong-phuc-cong-ty-prime-cotton-mau-ya-dam-phoi-tay-vai-trang-gao",
    name: {
      vi: "Áo đồng phục công ty Prime cotton xanh phối tay vải trắng gạo",
      en: "Prime Cotton Corporate Uniform - Dark Cyan with Rice White Sleeves",
    },
    image:
      "image/ao-dong-phuc-cong-ty-prime-cotton-mau-ya-dam-phoi-tay-vai-trang-gao-6.jpg",
    desc: {
      vi: "Áo thun được làm từ chất liệu mát, mềm mại và thoáng khí, mang lại cảm giác dễ chịu khi mặc trong thời gian dài. Vải có khả năng thấm hút mồ hôi tốt, co giãn nhẹ và hạn chế bí nóng, phù hợp cho thời tiết hằng ngày cũng như các hoạt động ngoài trời.",
      en: "This t-shirt is made from a cool, soft, and breathable material, ensuring comfort for long hours of wear. The fabric features excellent moisture-wicking property, slight stretchability, and heat reduction, perfectly suited for daily wear and outdoor activities.",
    },
    type: "new",
  },
  {
    id: "dong-phuc-ecotton-vang-cuc",
    name: {
      vi: "Đồng phục công ty ecotton màu vàng cúc",
      en: "Ecotton Corporate Uniform - Daisy Yellow",
    },
    image: "image/ao-dong-phuc-cong-ty-ecotton-2-mau-vang-cuc.jpg",
    desc: {
      vi: "Áo thun được làm từ chất liệu mát, mềm mại và thoáng khí, mang lại cảm giác dễ chịu khi mặc trong thời gian dài. Vải có khả năng thấm hút mồ hôi tốt, co giãn nhẹ và hạn chế bí nóng, phù hợp cho thời tiết hằng ngày cũng như các hoạt động ngoài trời.",
      en: "This t-shirt is made from a cool, soft, and breathable material, ensuring comfort for long hours of wear. The fabric features excellent moisture-wicking property, slight stretchability, and heat reduction, perfectly suited for daily wear and outdoor activities.",
    },
    type: "new",
  },
  {
    id: "cover-danh-muc-dong-phuc-teambuilding",
    name: {
      vi: "Đồng phục teambuilding công ty trắng đỏ",
      en: "Company Team-building Uniform - White & Red",
    },
    image: "image/cover-danh-muc-dong-phuc-teambuilding.jpg",
    desc: {
      vi: "Áo thun được làm từ chất liệu mát, mềm mại và thoáng khí, mang lại cảm giác dễ chịu khi mặc trong thời gian dài. Vải có khả năng thấm hút mồ hôi tốt, co giãn nhẹ và hạn chế bí nóng, phù hợp cho thời tiết hằng ngày cũng như các hoạt động ngoài trời..",
      en: "This t-shirt is made from a cool, soft, and breathable material, ensuring comfort for long hours of wear. The fabric features excellent moisture-wicking property, slight stretchability, and heat reduction, perfectly suited for daily wear and outdoor activities.",
    },
    type: "new",
  },
  {
    id: "cover-danh-muc-dong-phuc-ao-polo",
    name: {
      vi: "Đồng phục áo polo công ty trắng cánh tay xanh",
      en: "Corporate Polo Uniform - White with Blue Sleeves",
    },
    image: "image/cover-danh-muc-dong-phuc-ao-polo.jpg",
    desc: {
      vi: "Áo thun được làm từ chất liệu mát, mềm mại và thoáng khí, mang lại cảm giác dễ chịu khi mặc trong thời gian dài. Vải có khả năng thấm hút mồ hôi tốt, co giãn nhẹ và hạn chế bí nóng, phù hợp cho thời tiết hằng ngày cũng như các hoạt động ngoài trời.",
      en: "This t-shirt is made from a cool, soft, and breathable material, ensuring comfort for long hours of wear. The fabric features excellent moisture-wicking property, slight stretchability, and heat reduction, perfectly suited for daily wear and outdoor activities.",
    },
    type: "new",
  },
  // Sản phẩm cũ
  {
    id: "ao-thun-polo-do-do-co-tim",
    name: {
      vi: "Áo thun đồng phục polo cổ tím màu đỏ đô",
      en: "Uniform Polo Shirt - Burgundy with Purple Collar",
    },
    image: "image/products/ao-thun-dong-phuc-polo-co-tim-mau-do-do-2.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "thun-polo",
  },
  {
    id: "dong-phuc-hop-lop-10-nam",
    name: {
      vi: "Đồng phục họp lớp 10 năm cổ tròn màu trắng",
      en: "10th Year Class Reunion Uniform - White Crewneck",
    },
    image: "image/products/dong-phuc-hop-lop-10-nam-co-tron-mau-trang-8.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "hop-lop",
  },
  {
    id: "dong-phuc-hop-lop-15-nam",
    name: {
      vi: "Đồng phục họp lớp 15 năm màu biển nhạt phối vải",
      en: "15th Year Class Reunion Uniform - Light Ocean Blue Patchwork",
    },
    image:
      "image/products/dong-phuc-hop-lop-15-nam-mau-bien-nhat-phoi-vai-2.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "hop-lop",
  },
  {
    id: "dong-phuc-hop-lop-25-nam",
    name: {
      vi: "Đồng phục họp lớp 25 năm trường THPT Nguyễn Huệ",
      en: "25th Year Class Reunion Uniform - Nguyen Hue High School",
    },
    image:
      "image/products/dong-phuc-hop-lop-25-nam-truong-thpt-nguyen-hue-2.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "hop-lop",
  },
  {
    id: "dong-phuc-hop-lop-30-nam-dhkt",
    name: {
      vi: "Đồng phục họp lớp 30 năm đại học kinh tế quốc dân",
      en: "30th Year University Reunion Uniform - National Economics University (NEU)",
    },
    image:
      "image/products/dong-phuc-hop-lop-30-nam-dai-hoc-kinh-te-quoc-dan-8.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "hop-lop",
  },
  {
    id: "dong-phuc-lop-dai-hoc-KHXHVNV",
    name: {
      vi: "Đồng phục lớp đại học KHXH và NV",
      en: "University Class Uniform - USSH (KHXH & NV)",
    },
    image:
      "image/products/dong-phuc-hop-lop-dai-hoc-khoa-hoc-xa-hoi-va-nhan-van-2.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "hoc-school",
  },
  {
    id: "dong-phuc-mam-non-co-tron-mau-xanh-bien-nhat",
    name: {
      vi: "Đồng phục mầm non cổ tròn màu xanh biển nhạt",
      en: "Kindergarten Uniform - Light Ocean Blue Crewneck",
    },
    image: "image/products/dong-phuc-mam-non-co-tron-mau-xanh-bien-nhat-2.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "mam-non",
  },
  {
    id: "dong-phuc-mam-non-co-tron-mau-xanh-den",
    name: {
      vi: "Đồng phục mầm non cổ tròn màu xanh đen",
      en: "Kindergarten Uniform - Dark Navy Blue Crewneck",
    },
    image: "image/products/dong-phuc-mam-non-co-tron-mau-xanh-den-8.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "mam-non",
  },
  {
    id: "dong-phuc-mam-non-co-tron-mau-xanh-iris",
    name: {
      vi: "Đồng phục mầm non cổ tròn màu xanh Iris",
      en: "Kindergarten Uniform - Iris Blue Crewneck",
    },
    image: "image/products/dong-phuc-mam-non-co-tron-mau-xanh-iris-2.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "mam-non",
  },
  {
    id: "dong-phuc-mam-non-mau-cam-phoi-kem-cheese",
    name: {
      vi: "Đồng phục mầm non cam phối kem cheese",
      en: "Kindergarten Uniform - Orange Mixed with Cream Cheese",
    },
    image: "image/products/dong-phuc-mam-non-mau-cam-phoi-kem-cheese-7.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "mam-non",
  },
  {
    id: "dong-phuc-mam-non-mau-do-do-phoi-xanh-den",
    name: {
      vi: "Đồng phục mầm non màu đỏ đô phối xanh đen",
      en: "Kindergarten Uniform - Burgundy Mixed with Dark Navy",
    },
    image: "image/products/dong-phuc-mam-non-mau-do-do-phoi-xanh-den-7.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "mam-non",
  },
  {
    id: "dong-phuc-mam-non-mau-ruoc-hong-phoi-trang-gao",
    name: {
      vi: "Đồng phục mầm non màu ruốc hồng phối trắng gạo",
      en: "Kindergarten Uniform - Dusty Rose Pink with Rice White",
    },
    image:
      "image/products/dong-phuc-mam-non-mau-ruoc-hong-phoi-trang-gao-3.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "mam-non",
  },
  {
    id: "ao-dong-phuc-pickleball-thuong-hieu-momo",
    name: {
      vi: "Áo đồng phục pickleball thương hiệu momo",
      en: "Momo Brand Pickleball Sports Uniform Shirt",
    },
    image: "image/products/ao-dong-phuc-pickleball-thuong-hieu-momo.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "the-thao",
  },
  {
    id: "ao-polo-dong-phuc-sun-world-3",
    name: {
      vi: "Áo polo đồng phục Sun World",
      en: "Sun World Corporate Polo Uniform",
    },
    image: "image/products/ao-polo-dong-phuc-sun-world-3.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "cong-ty",
  },
  {
    id: "ao-polo-dong-phuc-vietinbank-4",
    name: {
      vi: "Áo polo đồng phục Viettinbank",
      en: "Vietinbank Corporate Polo Uniform",
    },
    image: "image/products/ao-polo-dong-phuc-vietinbank-4.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "cong-ty",
  },
  {
    id: "ao-teambuilding-phoi-mau-thoi-trang-1",
    name: {
      vi: "Áo teambuiding phối màu thời trang",
      en: "Fashionably Color-Blocked Team-building T-Shirt",
    },
    image: "image/products/ao-teambuilding-phoi-mau-thoi-trang-1.jpg",
    desc: {
      vi: "Chất liệu cotton thoáng mát...",
      en: "Breathable and cool cotton material...",
    },
    type: "old",
    category: "team-building",
  },
];
