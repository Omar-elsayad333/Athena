import React from 'react';

import MuiAlert,  { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

type AlertNotifyProps = {
    msg: string;
    state: boolean;
    msgType: any;
    handleState: Function;
};

const AlertNotify: React.FC<AlertNotifyProps> = ({ msg, state, msgType, handleState }) => {

    return (
        <Snackbar
            open={state}
            autoHideDuration={30000}
            onClose={() => handleState()}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >  
            <Alert
                // open={state}
                sx={{ wordBreak: 'break-all' }}
                onClose={() => handleState()}
                severity={msgType.value}
            >
                {msg}
            </Alert>
        </Snackbar>
    );
};

export default AlertNotify;
