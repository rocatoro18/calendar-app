import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours} from 'date-fns';

import { CalendarEvent, NavBar, CalendarModal } from '../';
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';
import { useUiStore } from '../../hooks';


const events = [{
  title: 'Cumpleaños',
  notes: 'Comprar regalo',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user:{
    _id: '123',
    name: 'Roberto'
  }
}]

export const CalendarPage = () => {

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
    console.log({click: event});
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
    console.log({viewChanged: event});
  }

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

    </>
  )
}
