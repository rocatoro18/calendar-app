import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { uiSlice, } from './ui/uiSlice';
import { calendarSlice } from './calendar/calendarSlice';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // ESTO ES PARA QUE NO REVISE SI PUEDE SERIALIZAR LAS FECHAS (USANDO REDUX TOOLKIT)
        serializableCheck: false
    })
});