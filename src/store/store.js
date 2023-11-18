import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { uiSlice, } from './ui/uiSlice';
import { calendarSlice } from './calendar/calendarSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // ESTO ES PARA QUE NO REVISE SI PUEDE SERIALIZAR LAS FECHAS (USANDO REDUX TOOLKIT)
        serializableCheck: false
    })
});