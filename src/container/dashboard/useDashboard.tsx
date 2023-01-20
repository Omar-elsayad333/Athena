import { useState } from 'react';

const useDashboard = () => {

    const [ formState, setFormState] = useState<boolean>(false);
    const [ tableState, setTableState] = useState<boolean>(false);

    // Do some animations while click nav buttons
    const navAnimation = () => {
        const logoLayer = document.getElementById('logo-layer');
        const teamLogo = document.getElementById('team-logo');
        const navLayer = document.getElementById('nav-layer');

        if(logoLayer && teamLogo && navLayer) {
            logoLayer.style.height = '20vh';
            teamLogo.style.width = '600px';
            teamLogo.style.transition = '1s';   
            navLayer.style.minHeight = '15vh';
        }
    }

    // Show add teacher form
    const fromStateHandler = () => {
        setTableState(false);
        setFormState(true);
    }

    // Show all teachers table
    const tableHandler = () => {
        setFormState(false);
        setTableState(true);
    }

    return (
        {   
            states: {
                formState,
                tableState
            },
            actions: {
                fromStateHandler,
                tableHandler,
                navAnimation
            },
            dialogs: {

            },
            data: {

            }
        }
    );
}
 
export default useDashboard;