import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  firebaseToken: null
};

const firebaseN = createSlice({
  name: 'firebaseN',
  initialState,
  reducers: {
    saveFirebaseToken(state, { payload }) {
        //console.log('paypayloadFirebase::::', payload)
      if (payload) {
        state.firebaseToken = payload;
      }
    },
    clearFirebaseToken(state, { payload }) {
        // console.log('clearFireBaseToken::::', payload)
      if (payload) {
        state.firebaseToken = null;
      }
    },
    createUserSession(state, { payload }) {
      // console.log('createUseression:::', payload)
        if (payload) {
          state.userSession = payload;
        }
    },
    clearUserSession(state, { payload }) {
      // console.log('clearUserSession:::', payload)
        if (payload) {
          state.userSession = null;
        }
    }
  },
});

export const { saveFirebaseToken, createUserSession, clearUserSession, clearFirebaseToken } = firebaseN.actions;
export default firebaseN.reducer;