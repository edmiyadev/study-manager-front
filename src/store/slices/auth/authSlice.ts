import { createSlice } from "@reduxjs/toolkit";

// export interface AuthState {
//   name: 'auth',
//   initialState: {
//     status: string,
//     user: {},
//     errorMesagge: undefined
//   }
// }

const initialState = {
  status: "checking",
  user: {},
  errorMesagge: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMesagge = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMesagge = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMesagge = payload;
    },
    clearErrorMessage: (state) =>{
      state.errorMesagge = undefined;
    }
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;
