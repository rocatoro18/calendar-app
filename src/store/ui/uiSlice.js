
// MANTENER INFORMACION DEL UI
// SI ESTA ABIERTO O CERRADO

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: (state) => {
            // DENTRO DEL TOOLKIT
            state.isDateModalOpen = true;
            /**
             * FUERA DEL TOOLKIT
             * return {
             *  ...state,
             *  isDateModalOpen: true
             * }
             */
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;