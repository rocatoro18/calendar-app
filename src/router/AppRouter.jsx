import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { getEnVariables } from '../helpers';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';


export const AppRouter = () => {

    //console.log(getEnVariables());
    const {status, checkAuthToken} = useAuthStore();
    //const authStatus = 'not-authenticated'; //'not-authenticated';

    useEffect(()=>{
      checkAuthToken();
    }, [])

    if(status === 'checking'){
      return (
        <h3>Cargando...</h3>
      )
    }

  return (
    <Routes>
        {
            
            
            (status === 'not-authenticated') 
                ?
                (
                  <>
                    <Route path="/auth/*" element={<LoginPage/>}/>
                    <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                  </>
                ) 
                :
                 (
                  <>
                    <Route path="/" element={<CalendarPage/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                  </>
                 )          
        }
      
    </Routes>
  )
}
