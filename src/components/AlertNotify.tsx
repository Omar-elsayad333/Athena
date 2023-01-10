import {useContext, forwardRef} from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import { IStyle } from 'styles/IStyle';
import { AlertColor } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert,  { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

type AlertNotifyProps = {
    msg: string;
    state: boolean;
    msgType: AlertColor;
    handleState: Function;
};

const AlertNotify: React.FC<AlertNotifyProps> = ({ msg, state, msgType, handleState }) => {

    const { mainColors } = useContext(DarkThemeContext)

    const style: IStyle = {
        root: {
            '.MuiPaper-root': {
                gap: '25px',
                fontSize: '14px',
                fontWeight: '700',
                background: 'transparent',
                borderRadius: '10px',
                border: '2px solid',    
                borderColor: () => {
                    if(msgType == 'success'){
                        return mainColors.success.main
                    }
                    if(msgType == 'error'){
                        return mainColors.error.main
                    }
                    if(msgType == 'warning'){
                        return mainColors.warning.main
                    }
                    if(msgType == 'info'){
                        return mainColors.info.main
                    }
                    return null
                },                boxShadow: 'none',
                color: () => {
                    if(msgType == 'success'){
                        return mainColors.success.main
                    }
                    if(msgType == 'error'){
                        return mainColors.error.main
                    }
                    if(msgType == 'warning'){
                        return mainColors.warning.main
                    }
                    if(msgType == 'info'){
                        return mainColors.info.main
                    }
                    return null
                },
            },
        }
    }

    return (
        <Snackbar
            open={state}
            sx={style.root}
            autoHideDuration={3000}
            onClose={() => handleState()}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >  
            <Alert
                onClose={() => handleState()}
                severity={msgType}
            >
                {msg}
            </Alert>
        </Snackbar>
    );
};

export default AlertNotify;
