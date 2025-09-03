import * as IMG from 'assets/images';
import moment from 'moment';
import {navigate} from 'navigation/navigation-ref';
export const DATE_FORMAT = {
  yyyy_mm_dd: 'YYYY-MM-DD',
};
export const COLLECTIONS = {
  users: 'users',
  tasks: 'tasks',
};
export const STORAGEKEYS = {
  userId: '@userId',
  user: '@user',
  token: '@token',
  lang: '@language',
};
export const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Satureday',
  'Sunday',
];

export const SLIDES_LIST = [
  {
    image: 'https://getmovers.co.uk/static/media/s1.f9907177.jpg',
    title: 'quick_search',
    desc: 'Move Anything to Anywhere… at the cheapest rates!! Start your moving journey now with the United Kingdoms most convenient transport and removal agency.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/5.29deee86.png',
    title: 'fast_shipping',
    desc: 'Move Anything to Anywhere… at the cheapest rates!! Start your moving journey now with the United Kingdoms most convenient transport and removal agency.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/6.58041a1b.png',
    title: 'free_rides',
    desc: 'Move Anything to Anywhere… at the cheapest rates!! Start your moving journey now with the United Kingdoms most convenient transport and removal agency.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/7.fe4e3dab.png',
    title: 'free_rides',
    desc: 'Move Anything to Anywhere… at the cheapest rates!! Start your moving journey now with the United Kingdoms most convenient transport and removal agency.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/8.a16c3c07.png',
    title: 'free_rides',
    desc: 'Move Anything to Anywhere… at the cheapest rates!! Start your moving journey now with the United Kingdoms most convenient transport and removal agency.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/9.0ec25ad3.png',
    title: 'free_rides',
    desc: 'Move Anything to Anywhere… at the cheapest rates!! Start your moving journey now with the United Kingdoms most convenient transport and removal agency.',
  },
];
export const ONBOARDING_LIST = [
  {
    image: IMG.onboardingfirst,
    title: 'Welcome to NextHire',
    desc: 'It is a long established fact that a reader will be distracted by the readable content.',    
  },
  {
    image: IMG.onboardingsecond,
    title: 'Get Upwork Job Alerts',
    desc: 'It is a long established fact that a reader will be distracted by the readable content.',    
  },
  {
    image: IMG.onboardingthird,
    title: 'AI Powered Cover letters',
    desc: 'It is a long established fact that a reader will be distracted by the readable content.',    
  },
];
export const SERVICE_LIST = [
  {
    icon: IMG.HomeCartTool,
    title: 'My Order',
    screenName: 'MyOrderScreen',
  },
  {
    icon: IMG.HomeVehicleTool,
    title: 'Manage Vehicle',
    screenName: 'ManageVehicleScreen',
  },

  {
    icon: IMG.HomehistoryTool,
    title: 'History',
    screenName: 'HistoryScreen',
  },
  {
    icon: IMG.homeProfile,
    title: 'Profile',
    screenName: 'UserTab',
  },
];

export const subscriptionList = [
  {label: 'Unlimited Job Alerts'},
  {label: 'Instant Notifications'},
  {label: 'Custom Job Filters'},
  {label: 'Exclusive Offers'},
];

export const HomeList = [
  {
    image: IMG.cap,
    title: 'AI Mentor',
    moveTo: 'AiMentor',
  },
  {
    image: IMG.cap,
    title: 'AI Template',
    // moveTo: '',
  },

];
export const MANAGE_CAR_LIST = [
  {
    icon: IMG.truckvehicle,
    title: 'Semi Figures',
    desc: 'Loading Boxes',
  },
  {
    icon: IMG.hondablackvehicle,
    title: 'Honda NSX',
    desc: 'The New Hybrid Super Car',
  },

  {
    icon: IMG.hondavechile,
    title: 'Honda NSX',
    desc: 'The New Hybrid Super Car',
  },
];
export const ORDER_DETAILS_LIST = {
  Order_no: '123',
  date: moment().format(DATE_FORMAT.yyyy_mm_dd),
  name: 'Ali Abdullah',
  delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
  pickup_location: 'Pickup Location',
  service_type: 'Service Type',
};

export const ORDER_LIST = [
  {
    Order_no: '123',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location:
      'Pickup Location paddingVertical: mvs(8)paddingVertical: mvs(8)',
    service_type: 'SERVICE TYPE',
    type: 'New',
  },
  {
    Order_no: '123',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location: 'Pickup Location',
    service_type: 'SERVICE TYPE',
    type: 'processing',
  },
  {
    Order_no: '123',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location: 'Pickup Location',
    service_type: 'SERVICE TYPE',
    type: 'delieverd',
  },
  {
    Order_no: '123',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location: 'Pickup Location',
    service_type: 'SERVICE TYPE',
    type: 'New',
  },
];
export const RECENT_ORDER_LIST = [
  {
    Order_no: '123',
    status: 'Delieverd',
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location:
      'Pickup Location paddingVertical: mvs(8)paddingVertical: mvs(8)',
    service_type: 'SERVICE TYPE',
  },
  {
    Order_no: '123',
    status: 'Delieverd',
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location: 'Pickup Location',
    service_type: 'SERVICE TYPE',
  },
  {
    Order_no: '123',
    status: 'Delieverd',
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location: 'Pickup Location',
    service_type: 'SERVICE TYPE',
  },
  {
    Order_no: '123',
    status: 'Delieverd',
    name: 'Ali Abdullah',
    delivery_time: moment().format(DATE_FORMAT.yyyy_mm_dd),
    pickup_location: 'Pickup Location',
    service_type: 'SERVICE TYPE',
  },
];
export const ITEM_DETAILS_LIST = [
  {
    item_name: 'SMART TV (Less than 30 inch, SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
  {
    item_name: 'SMART TV (Less than 30 inch',
    quantity: '1',
  },
];
export const NOTIFICATION_LIST = [
  {
    title: 'message',
    desc: 'Moving is pretty complicated; however, these four items can make your moving experience even worse!',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
  },
  {
    title: 'message',
    desc: 'Moving is pretty complicated; however, these four items can make your moving experience even worse!',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
  },
  {
    title: 'message',
    desc: 'Moving is pretty complicated; however, these four items can make your moving experience even worse!',
    date: moment().format(DATE_FORMAT.yyyy_mm_dd),
  },
];
export const ABOUT_US_LIST = [
  {
    image: 'https://getmovers.co.uk/static/media/get.0a606868.png',
    title: 'Who are we?',
    desc: 'GetMovers is an accomplished removal and storage agency with hundreds of satisfied customers online. It was established by a group of experienced professionals with over 20 years of experience in the said industry. We have multiple storage units throughout the United Kingdom, and our partnerships with local clients make getting more affordable rates for your move easy. GetMovers caters to both residential and commercial customers alike. We do everything the standard removal and storage service does, just better and at more affordable rates!',
  },
  {
    image: 'https://getmovers.co.uk/static/media/service.903780cb.png',

    title: 'Our Story',
    desc: 'Here at GetMovers, we realise that the removal and storage industry is in dire need of change. Most, if not, all of the time, the prices for even a small move can be OUTRAGEOUS, and we get that.One eventful evening, our founding team at GetMovers, finally decided to become the change instead of waiting for it, and the result? Hundreds of satisfied customers online! GetMovers takes immense pride in providing the absolute best removal services at the most affordable rates without compromising on any front. Be it customer service, security of goods or the overall planning of the move, we strive to deliver the best you can think of!',
  },

  {
    image: 'https://getmovers.co.uk/static/media/price.b839cb60.png',

    title: 'How much can a removal with GetMovers cost?',
    desc: 'Every move is made up of unique factors in its simple way. Each of these factors, such as the pickup floor, the number of items or the nature of the items, can affect the total cost of the move. For more accurate pricing information specific to your relocation, we’d recommend getting a few quotes or contacting us directly at (0800 6358888).',
  },
];
export const BLOGS_LIST = [
  {
    image: 'https://getmovers.co.uk/static/media/who.94e82f50.png',
    title: 'Partner up with GetMovers!',
    desc: 'Becoming a working member of the GetMovers family allows you to work at your convenience. You can set your availability hours and take on jobs whenever you deem fit With GetMovers moving just around anything you can find, from vehicles to household items, there is never a shortage of jobs. We provide our local partners with the flexibility of taking on whatever position they deem fit. Think you’re up for it? Get started now and add another income stream to your monthly revenue.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/why.aafaca11.png',

    title: 'Why work for us?',
    desc: 'At GetMovers, we’re not just concerned with customer satisfaction, but we also make sure to ensure the comfort of our own. Becoming a part of the GetMovers family isn’t just in the name; we mean it.',
  },
];
export const ADVICE_FROM_US_LIST = [
  {
    image: 'https://getmovers.co.uk/static/media/pro.ed5428c2.png',
    title: 'Why hire professional movers?',
    desc: 'Like, couldn’t you just do it yourself? While you technically could, there’s a lot that comes with a move. From proper planning to making sure everything is adequately taken care of. Here are a few reasons why you may prefer hiring professional movers instead of just doing it yourself:',
  },
  {
    image: 'https://getmovers.co.uk/static/media/tipp.34cdbce7.png',

    title: 'How much should you tip your movers?',
    desc: 'The standard tipping rate for professional movers is between £3 and £6 per hour for each mover. On average, people set aside around 20% of their total budget to tip their movers. Tipping doesn’t usually cost more than 20% of the total cost of the move unless, of course, you’re an extremely generous tipper.Point to note: You should always tip everyone the same amount of money per hour, be it the movers or the lead workers. Unequal tipping can lead to dissatisfaction amongst the crew members. With GetMovers, making more money in tips should depend more on the number of hours worked and not the position worked.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/difi.4bfee1e7.jpg',
    title: 'What are the four most difficult objects to move?',
    desc: 'Moving is pretty complicated; however, these four items can make your moving experience even worse!',
  },
  {
    image: 'https://getmovers.co.uk/static/media/b3.b1647e55.jpg',

    title: 'Cars',
    desc: 'Cars can either be the easiest or the hardest object to move; there’s just no in-between. For a functioning vehicle with at least one driver and a nearby location, the move will take place without any significant hiccups.But for single or multiple inoperable vehicles with a distant location, you get a headache beyond your capacity. For people who don’t know how to operate a tow truck, calling in a professional moving agency or a dedicated automobile transport service is the best decision at hand.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/b5.27373e64.jpg',
    title: 'Pianos',
    desc: 'Pianos are infamous for being a frustrating mix of heavy and fragile.They aren’t just large; they’re cumbersome and fragile too. Pianos weigh around 340 kilograms (750 pounds), which quickly puts them out of the lifting range of most families. Combine that with the fact that pianos have a super delicate balance of hammers, strings, and interconnected keys, which can get all messed up or broken easily, and you got yourself the ultimate nightmare of moving a pianoProfessionals, who are used to dealing with pianos, aren’t just strong people, they’re also highly familiar with the musical instrument and its know-how.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/art.dd553f9b.png',

    title: 'Pottery and Art',
    desc: 'The difficulty of moving pottery or art goes without saying. The average pottery piece can break or crack at a slight drop or mishandling. On the other hand, art forms, such as paintings, might not seem as breakable, but they are much more prone to damage from other factors such as heat, light or smudging.Furthermore, dealing with such pieces often means handling an object that is simply not replaceable, for instance, a family heirloom. Hence, pottery or art of any kind must be handled very carefully on every step of the moving journey from the initial wrap to the final unloading.',
  },
  {
    image: 'https://getmovers.co.uk/static/media/book.efabcada.png',

    title: 'Firearms',
    desc: 'Moving firearms presents not only safety but also legal concerns during a move. When moving, guns should be packed into safety cases that are appropriately labelled. Furthermore, all movers (or participants if it’s a DIY move) should be informed beforehand about the presence of the firearms to be relocated.The removal and storage of firearms can also be deemed illegal under certain circumstances. When planning a move, be sure to educate yourself on the gun safety and relocation laws of the intended location before making a move.',
  },
];
