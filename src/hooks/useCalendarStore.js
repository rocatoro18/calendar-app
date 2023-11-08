
// CUALQUIER INTERACCION CON EL STORE SE VA A HACER
// ATRAVEZ DE ESTE CUSTOM HOOK PARA TENER CENTRALIZADA 
// TODA ESA LOGICA Y NO ESCRIBIRLA UNA Y OTRA VEZ
// LOS OTROS COMPONENTES SOLO VAN A LLAMAR LA FUNCIONES QUE 
// ESTE CUSTOM HOOK EXPORTA

import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    // INICIO PROCESO DE GRABACION

    const startSavingEvent = async(calendarEvent) => {
        // TODO: LLEGAR AL BACKEND

        // TODO BIEN

        if(calendarEvent._id){
            // Actualizando
            dispatch(onUpdateEvent({...calendarEvent}));
        } else {
            // Creando
            dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
        }

    }

    const startDeletingEvent = () => {
        // TODO; LLEGAR AL BACKEND
        dispatch(onDeleteEvent());
    }

    return {
        // Propiedades
        activeEvent,
        events,
        // DOBLE NEGACION REGRESA BOOLEANO
        hasEventSelected: !!activeEvent,
        // Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent

   }
}
