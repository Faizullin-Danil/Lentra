import { createSlice } from "@reduxjs/toolkit";
import { store } from './store';

export type AppDispatch = typeof store.dispatch;

export const AlertSlice = createSlice({
    name: 'favouritesfilms',
    initialState: {
        value: false,
    },
    reducers: {
        openAlert: (state) => {
            state.value = true
        },
        closeAlert: (state) => {
            state.value = false;
        },  
    }
})

export const { openAlert, closeAlert } = AlertSlice.actions;

export const openAlertWithTimeout = () => {
    return (dispatch: AppDispatch) => {
      dispatch(openAlert());
      setTimeout(() => {
        dispatch(closeAlert());
      }, 2000);
    };
  };

export default AlertSlice