import { createSlice } from "@reduxjs/toolkit";

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
        }        
    }
})

export const { openAlert, closeAlert } = AlertSlice.actions;

export const openAlertWithTimeout = () => (dispatch: any) => {
    dispatch(openAlert());
    setTimeout(() => {
        dispatch(closeAlert());
    }, 2000);
};
export default AlertSlice