import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    show: false, 
    message: '',  
    type: '',
  },
  reducers: {
    showNotification: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
       state.type = action.payload.type || 'info';
    },
    hideNotification: (state) => {
      state.show = false;
      state.message = '';
      state.type = '';
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;