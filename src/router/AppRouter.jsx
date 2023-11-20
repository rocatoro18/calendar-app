import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { getEnVariables } from '../helpers';


export const AppRouter = () => {

    //console.log(getEnVariables());

    const authStatus = 'not-authenticated'; //'not-authenticated';

  return (
    <Routes>
        {
            
            
            (authStatus === 'not-authenticated') 
                ? <Route path="/auth/*" element={<LoginPage/>}/>
                : <Route path="/*" element={<CalendarPage/>}/>
            
        }
        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
