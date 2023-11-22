
// CUALQUIER INTERACCION CON EL STORE SE VA A HACER
// ATRAVEZ DE ESTE CUSTOM HOOK PARA TENER CENTRALIZADA 
// TODA ESA LOGICA Y NO ESCRIBIRLA UNA Y OTRA VEZ
// LOS OTROS COMPONENTES SOLO VAN A LLAMAR LA FUNCIONES QUE 
// ESTE CUSTOM HOOK EXPORTA

import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';
import { calendarApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    // INICIO PROCESO DE GRABACION

    const startSavingEvent = async(calendarEvent) => {

        try {
            //console.log(calendarEvent);
            if(calendarEvent.id){
                // Actualizando
    
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
                dispatch(onUpdateEvent({...calendarEvent, user}));
                return;
            } 
                // Creando
                // EL MISMO CALENDAR API ESTA INCRUSTANDO MEDIANTE
                // INTERCEPTORES LOS HEADERS NECESARIOS COMO EL TOKEN
                const {data} = await calendarApi.post('/events', calendarEvent);
    
                dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user}));
    

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }

    const startDeletingEvent = () => {
        // TODO; LLEGAR AL BACKEND
        dispatch(onDeleteEvent());
    }

    const startLoadingEvents = async() => {
        try {
            
            const {data} = await calendarApi.get('/events')
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));
            //console.log(events);

        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error);
        }
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
        startDeletingEvent,
        startLoadingEvents

   }
}
