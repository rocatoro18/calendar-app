import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store';

// TODO LO QUIERO MANEJAR A TRAVEZ DE ESTE CUSTOM HOOK
export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector(state => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }

    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    }

    const toggleDateModal = () => {
        isDateModalOpen 
        ? closeDateModal()
        : openDateModal();
    }

    return {
        // Propiedades
        isDateModalOpen,
        // Metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }

}