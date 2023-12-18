import { createSlice } from '@reduxjs/toolkit'
const initialState = ""
let helper
export const notifSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        notification: (state, action) => {
            return state = action.payload
        }
    }
});

export const {notification} = notifSlice.actions;

export const setNotification = (notif, t) =>{

    return dispatch => {
        dispatch(notification(notif))
        clearTimeout(helper)
        helper = setTimeout(() => {
            dispatch(notification("",0));
        }, t*1000);
    }
  }

export default notifSlice.reducer;