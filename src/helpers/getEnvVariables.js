
export const getEnVariables = () => {

    //import.meta.env;

    // EXPORTAR VARIABLES DE ENTORNO DE MANERA MANUAL
    // POR ERROR EN YARN BUILD
    return {
        ///...import.meta.env
        VITE_API_URL: import.meta.env.VITE_API_URL,
    }

}