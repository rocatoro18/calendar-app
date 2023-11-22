import { parseISO } from 'date-fns';


export const convertEventsToDateEvents = (events = []) => {
    return events.map(event => {

        // PARSEAR A FECHA VALIDA POR JS
        event.start = parseISO(event.start);
        event.end = parseISO(event.end);

        return event;
    })
}