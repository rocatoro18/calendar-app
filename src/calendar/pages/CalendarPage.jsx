import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, NavBar, CalendarModal, FabAddNew, FabDelete } from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useEffect, useState } from 'react';
import { useUiStore } from '../../hooks';
import { useCalendarStore } from '../../hooks/useCalendarStore';


export const CalendarPage = () => {

  const {events, setActiveEvent, startLoadingEvents} = useCalendarStore();

  const {openDateModal} = useUiStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    //console.log({event, start, end, isSelected});

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }

  const onDoubleClick = (event) => {
    //console.log({doubleClick: event});
    openDateModal();
  }

  const onSelect = (event) => {
    //console.log({click: event});
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
    console.log({viewChanged: event});
  }

  useEffect(()=>{
    startLoadingEvents()
  },[]);

  return (
    <>
    <NavBar/>

    <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={{
        // SOLO MANDO LA REFERENCIA AL CALENDAR EVENT
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
    />

      <CalendarModal/>

      <FabAddNew/>

      <FabDelete/>      

    </>
  )
}
