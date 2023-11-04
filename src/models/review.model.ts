export interface ReviewModel {
  id: string;
  username: string;
  avatar: string;
  star: number;
  images: string[];
  content: string;
  time: string;
}

export const reviewData: ReviewModel[] = [
  {
    id: '1',
    avatar:
      'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lkoufwmd47hm73_tn',
    username: 'tranquynh69',
    content:
      'Giao hàng nhanh, vui vẻ, thân thiện, moi nguoi nên mua. Đơn vị giao hàng chuyên nghiep, mình sẽ nua tiếp tục khi cần. Giao hàng vừa ý',
    images: [
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnfworyfiewdc4.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnfworyfjtgt07.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnfwoy3aj7jhac.webp',
    ],
    star: 4,
    time: '2023-10-29 20:30',
  },
  {
    id: '2',
    avatar:
      'https://images2.thanhnien.vn/Uploaded/nhutnq/2022_10_02/220928180903-03-dall-e-ai-2189.jpg',
    username: 'hoaithuong09',
    content:
      'Chất lượng sách y như hình ở ngoài còn hơn cả mong đợi hmmm... nói sao nhỉ. Đóng gói cẩn thận và shop cũng nhiệt tình. Nội dung cuốn lắm, sách thơm, mới, chữ không bị lem.',
    images: [
      'https://down-bs-vn.img.susercontent.com/vn-11134103-22100-2wj84gqn2liv73.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-22100-6fx68hqn2livd5.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-23020-2l91earv01nva4.webp',
    ],
    star: 4,
    time: '2023-4-14 14:50',
  },
  {
    id: '3',
    avatar:
      'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg',
    username: 'tramanh18',
    content:
      'Đóng gói chuyên nghiệp,giao hàng nhanh cảm ơn shop.Mới đọc được hết chương 2 thấy nội dung hay ngôn từ gần gũi dễ hiểu,mong là đọc hết cuốn này mình sẽ được như tác giả là "một người tự do và hạnh phúc".',
    images: [
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lf5a9mnoetlj48.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lf5a9mnoetfu0c.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-22060-8iq0t8doybdvf4.webp',
    ],
    star: 4,
    time: '2023-5-18 9:10',
  },
  {
    id: '4',
    avatar:
      'https://inkythuatso.com/uploads/thumbnails/800/2023/03/2-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-58.jpg',
    username: 'trucnhan12',
    content:
      'Sách dễ hiểu, hấp dân. Là cẩm nang quan trọng để thay đổi bộ não hoàn thiện, lô gíc, thông minh, và khách quan khi nhìn nhận vấn đề. bạn sẽ làm chủ suy nghĩ tốt, biết lắng nghe hơn và ít phán xét đi. Đơn hàng giao nhanh lắm.',
    images: [
      'https://down-bs-vn.img.susercontent.com/vn-11134103-22080-pfipv1viyugv81.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-llnfy2ejpxlbf9.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lhww8ssx0sjpc1.webp',
    ],
    star: 3,
    time: '2023-4-30 18:19',
  },
  {
    id: '5',
    avatar:
      'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-hai-huoc-cho-ngay-moi-hanh-phuc-inkythuatso-09-13-36-37.jpg',
    username: 'linhlinh18',
    content:
      'Một cuốn sách hay đáng để mua về đọc. Cuốn sách này đem lại những cung bậc cảm xúc cho người đọc và những câu chuyện, bài học để bản thân suy ngẫm.',
    images: [
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-liu94d81kamq8f.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lggij6xa7nmy5c.webp',
      'https://down-bs-vn.img.susercontent.com/vn-11134103-23020-sno6ot2q96mv80.webp',
    ],
    star: 5,
    time: '2023-8-20 10:00',
  },
];
