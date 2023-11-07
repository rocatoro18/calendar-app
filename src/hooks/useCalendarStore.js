
// CUALQUIER INTERACCION CON EL STORE SE VA A HACER
// ATRAVEZ DE ESTE CUSTOM HOOK PARA TENER CENTRALIZADA 
// TODA ESA LOGICA Y NO ESCRIBIRLA UNA Y OTRA VEZ
// LOS OTROS COMPONENTES SOLO VAN A LLAMAR LA FUNCIONES QUE 
// ESTE CUSTOM HOOK EXPORTA

import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    return {
        // Propiedades
        activeEvent,
        events,
        // Metodos
        setActiveEvent

   }
}
