import {configureStore} from '@reduxjs/toolkit';
import chatSlice from './reducers/chat-reducer';
import userSlice from './reducers/user-reducer';

export const store = configureStore({
  reducer: {
    user: userSlice,
    chat: chatSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
