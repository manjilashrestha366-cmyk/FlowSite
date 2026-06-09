// src/store/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    sent: false,
    senderName: '',
  },
  reducers: {
    sendMessage(state, action) {
      state.sent = true;
      state.senderName = action.payload.name;
    },
    resetMessage(state) {
      state.sent = false;
      state.senderName = '';
    },
  },
});

export const { sendMessage, resetMessage } = contactSlice.actions;
export default contactSlice.reducer;
