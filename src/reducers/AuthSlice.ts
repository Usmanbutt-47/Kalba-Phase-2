import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  token: null,
  isAuthenticated: false,
  queueURL: null,
  role: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken(state, { payload }) {
      if (payload) {
        state.token = payload;
      }
    },
    clearToken(state) {
      state.token = null;
    },
    setQueueUrl(state, {payload}){
      state.queueURL = payload;
    },
    setAuthState(state, { payload }) {
      state.isAuthenticated = payload;
    },
    setRole(state, {payload}){
      state.role = payload;
    },
    setIsVerified(state, { payload }) {
      state.isVerified = payload;
    },
  },
});

export const { saveToken, clearToken, setQueueUrl, setAuthState, setRole, setIsVerified } = auth.actions;
export default auth.reducer;