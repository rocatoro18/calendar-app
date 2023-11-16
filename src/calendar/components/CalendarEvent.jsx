

// SE PUEDE MEMORIZAR ESTO CUANDO TENGAMOS MUCHOS EVENTOS
// EN EL FORMULARIO
export const CalendarEvent = ({event}) => {
    const {title, user} = event;
    
  return (
    <>
        <strong>{title}</strong>
        <span> - {user.name}</span>
    </>
  )
}
