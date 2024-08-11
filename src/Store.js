import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userData: null,
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const { setUserData, setLoggedIn } = userSlice.actions;
