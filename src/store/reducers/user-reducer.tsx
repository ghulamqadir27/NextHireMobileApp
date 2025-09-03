import {createSlice} from '@reduxjs/toolkit';

type Props = {
  userInfo: any;
  language: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  notifications: any[];

  unreadNotification: number;
  countries: any[];
  vehicle_types: any[];
};
const initialState: Props = {
  userInfo: null,
  language: 'en',
  location: undefined,
  notifications: [],
  countries: [],
  unreadNotification: 0,
  vehicle_types: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    reset: (state, action) => {
      state = initialState;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
      state.unreadNotification = action.payload?.filter(
        (x: any) => x?.is_read == '0',
      )?.length;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setVehcileTypes: (state, action) => {
      state.vehicle_types = action.payload;
    },
    resetUser: (state, action) => {
      return initialState;
    },

    // demoAsync: (state, action) => {
    //   state.userInfo = action.payload
    // },
  },
});
// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  reset,
  resetUser,
  setLanguage,
  setLocation,
  setNotifications,
  setVehcileTypes,
  setCountries,
  // demoAsync
} = userSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer;
