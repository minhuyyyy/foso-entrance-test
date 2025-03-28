interface Image {
    src: string;
    alt: string;
}

interface SubSection {
    subTitle?: string;
    subContent: string;
}

interface Section {
    title: string;
    content: string;
    list?: { subTitle: string }[];
    images?: Image[];
    subSections?: SubSection[];
    ending?: string[];
}

const sections: Section[] = [
    {
        title: '1. Quy trình 5S là gì?',
        content: `Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.; Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:`,
        list: [
            { subTitle: 'Seiri (Ngăn nắp)' },
            { subTitle: 'Seiton (Sắp xếp)' },
            { subTitle: 'Seiso (Vệ sinh)' },
            { subTitle: 'Seiketsu (Tiêu chuẩn hóa)' },
            { subTitle: 'Shitsuke (Kỷ luật)' },
        ],
    },
    {
        title: '2. Lợi ích quy trình 5S đem lại',
        content: `Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.;Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic...`,
        images: [
            {
                src: '/assets/5s-section2.png',
                alt: 'Tại sao doanh nghiệp cần quy trình 5S?',
            },
        ],
    },
    {
        title: '3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
        content: `Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại.`,
        images: [
            {
                src: '/assets/5s-section 3.png',
                alt: 'Quy trình 5s gồm các bước',
            },
        ],
        subSections: [
            {
                subTitle: '3.1 Cải thiện rõ nét môi trường làm việc',
                subContent:
                    'Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn...',
            },
            {
                subTitle: '3.2 Tiết kiệm thời gian đáng kể',
                subContent:
                    'Giảm thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc...',
            },
            {
                subTitle: '3.3 Tăng năng suất làm việc',
                subContent:
                    'Nhờ vào quy tắc 5S, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ...',
            },
            {
                subTitle: '3.4 Tiết kiệm chi phí',
                subContent:
                    'Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn...',
            },
            {
                subTitle: '3.5 Tăng chất lượng sản phẩm',
                subContent:
                    '5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm...',
            },
        ],
    },
    {
        title: '4. Quy trình 5S gồm các bước',
        content: `5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:`,
        subSections: [
            {
                subTitle: '4.1 Seiri (Ngăn nắp)',
                subContent:
                    'Loại bỏ những thứ dư thừa không cần thiết để tạo không gian làm việc gọn gàng.',
            },
            {
                subTitle: '4.2 Seiton (Sắp xếp)',
                subContent:
                    'Sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng...',
            },
            {
                subTitle: '4.3 Seiso (Vệ sinh)',
                subContent:
                    'Cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ...',
            },
            {
                subTitle: '4.4 Seiketsu (Tiêu chuẩn hóa)',
                subContent:
                    'Đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng dụng cụ...',
            },
            {
                subTitle: '4.5 Shitsuke (Kỷ luật)',
                subContent:
                    'Tạo ra hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức tuân thủ quy trình.',
            },
        ],
        images: [
            {
                src: '/assets/5s-section4.png',
                alt: 'Các bước thực hiện quy trình 5s',
            },
        ],
    },
    {
        title: '5. Quy trình thực hiện 5S',
        content: `Quy trình được thực hiện như sau:`,
        subSections: [
            {
                subTitle: '5.1 Giai đoạn chuẩn bị',
                subContent:
                    'Doanh nghiệp cần bố trí nhân lực điều hành và quản lý quá trình thực hiện 5S...',
            },
            {
                subTitle: '5.2 Triển khai rộng rãi',
                subContent:
                    'Cung cấp tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp.',
            },
            {
                subTitle: '5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp',
                subContent:
                    'Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.',
            },
            {
                subTitle: '5.4 Sàng lọc, sắp xếp và đánh giá',
                subContent:
                    'Xây dựng tiêu chuẩn rõ ràng để quá trình thực hiện khoa học hơn, hiệu quả hơn.',
            },
            {
                subTitle: '5.5 Đánh giá',
                subContent:
                    'Tổng kết lại quá trình cải tiến và xem xét cần cải thiện ở phương diện nào trong quá trình thực hiện.',
            },
        ],
    },
    {
        title: '6. Quy trình 5S có giống với Kaizen?',
        content: `Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S và Kaizen là hai khái niệm khác nhau nhưng có mối quan hệ chặt chẽ với nhau.`,
        subSections: [
            {
                subContent:
                    'Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.',
            },
            {
                subContent: `Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.`,
            },
        ],
        ending: ['Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. ']
    },
    {
        title: '7. Đối tượng nào nên áp dụng 5S?',
        images: [
            {
                src: '/assets/5s-section7.png',
                alt: 'Các yếu tố tạo nên thành công cho quy trình 5S',
            },
        ],
        content:
            'Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.',
        subSections: [
            {
                subTitle: '7.1 Doanh nghiệp sản xuất',
                subContent:
                    'Các doanh nghiệp sản xuất áp dụng 5S để tối ưu hóa quy trình làm việc, giảm thiểu lãng phí và nâng cao năng suất lao động.',
            },
            {
                subTitle: '7.2 Cơ quan hành chính',
                subContent:
                    'Việc tổ chức không gian làm việc hợp lý giúp tăng hiệu quả làm việc của các cơ quan hành chính, giảm thiểu sự lộn xộn và nâng cao hiệu suất xử lý công việc.',
            },
            {
                subTitle: '7.3 Tổ chức phi lợi nhuận',
                subContent:
                    'Các tổ chức phi lợi nhuận có thể áp dụng 5S để quản lý tài nguyên hiệu quả, giảm chi phí hoạt động và tạo ra môi trường làm việc khoa học.',
            },
            {
                subTitle: '7.4 Doanh nghiệp nhỏ',
                subContent:
                    'Doanh nghiệp nhỏ có thể tận dụng quy trình 5S để tối ưu không gian làm việc, nâng cao năng suất mà không cần đầu tư quá nhiều vào cơ sở hạ tầng.',
            },
            {
                subTitle: '7.5 Các tổ chức có hoạt động phức tạp',
                subContent:
                    'Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.',
            },
        ],
    },
    {
        title: '8. Các yếu tố tạo nên thành công cho quy trình 5S',
        content: `Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:; 
        Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây là yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.;
        Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.;  
        Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.;
        
        Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.`,
    },
];

export default sections;
