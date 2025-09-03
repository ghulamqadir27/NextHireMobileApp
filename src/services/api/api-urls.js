// export const IP = 'https://getmovers.katashempstead.com';
// export const IP = 'https://luggage.prismatic-technologies.com';
// export const IP = 'https://getmovers.co.uk';
export const IP = 'https://nexthire.app';
export const URLS = {
  base_url: `${IP}/api/v1/`,
  image_url: `${IP}/`,
  auth: {
    signup: 'user/auth/register',
    resend_otp: 'user/auth/resend-otp',
    verify_otp: 'user/auth/verify',
    login: 'user/auth/login',
    forgot_password: 'user/auth/forgot-password',
    update_password: 'user/auth/update-password',
    update_profile: 'user/update',
    logout: 'user/auth/logout',
    delete_account: 'user/delete-account',


    get_user_info: 'user/userInfo',
    driver_location: 'updateDriverLocation',
    get_home_banner: 'bannerList',
    get_user: 'user/2/edit',
    checkemail: 'checkEmailPhone',
    // change_password: 'doctor/changePassword',
    // otp_verify: 'doctor/otpVerify',
    // forget_password: 'doctor/forgetPassword',
    uploadImage: 'updateImage',
    driverTerms: 'getDriverTerms',
    privacypolicy: 'getDriverPrivacy',
    contactUs: 'contactUsInfo',
    delete_account: 'deleteAccount',
  },
  scraperlist: {
    get_jobs_list : 'freelancer-scraper/job/all',
    get_jobs_list_by_id : 'freelancer-scraper/job/',


    getorder: 'DriverOrderList',
    getorderdetails: 'OrderDetails',
    orderStatus: 'DriverOrderStatus',
    StatusChangeOrder: 'orderStatus',
    orderHistory: 'DriverHistory',
  },
  notification: {
    getNotification: 'driverNotification',
    read_notification: 'notificationRead',
  },
  vehcile: {
    create_vehilce: 'vehicle/create',
    store_vehicle: 'vehicle',
    vehicle_list: 'vehicleList',
    vehicle_list_order: 'vehicleList',
    update_vehicle: 'vehicle/',
    edit_vehicle: 'vehicle/',
  },
  status_change: {
    status: 'onlineStatus',
  },
  document: {
    update_document: 'driverUpdate',
    get_document: 'getDriverDetails',
  },
  chat: {
    get_message: 'chat/messages/',
    get_latest_message: 'chat/get-new-messages/',
    get_conservation: 'chat/conversations',
    send_message: 'chat/insert-message',
    create_conservation: 'chat/create-conversation',
  },
  all_hospitals: 'doctor/allHospital',
};
