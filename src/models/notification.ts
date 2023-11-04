export interface NotificationModel {
  id:string,
  title: string;
  content: string;
  time: string;
}

export const notificationData: NotificationModel[] = [
  {
    id:"1",
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    id:"2",
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    id:"3",
    title: 'Special Offer 25% OFF',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
];
