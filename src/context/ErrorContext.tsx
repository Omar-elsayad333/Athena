import { AlertColor } from '@mui/material';
import { useState, useContext, createContext} from 'react';

type ContextState = {
    msg: string;
    state: boolean;
    handleState: Function;
    msgType: AlertColor;
    setInfoMessage: (message: string) => void | null;
    setErrorMessage: (message: string) => void | null;
    setWarningMessage: (message: string) => void | null;
    setSuccessMessage: (message: string) => void | null;
};

const ErrorContext = createContext<ContextState>({
    msg: '',
    state: false,
    msgType: 'info',
    handleState: () => {},
    setInfoMessage: () => {},
    setErrorMessage: () => {},
    setWarningMessage: () => {},
    setSuccessMessage: () => {}
});

type Props = {
    children: React.ReactElement<any, any> & React.ReactNode;
};

const ErrorProvider: React.FC<Props> = ({ children }) => {

    const [msg, setMsg] = useState<string>('');
    const [state, setState] = useState<boolean>(false);
    const [msgType, setMsgType] = useState<AlertColor>('info');

    const handleState = () => {
        setState(false);
    };

    const setErrorMessage = (errorMessage: string) => {
        setState(true);
        setMsg(errorMessage);
        setMsgType('error');
    };
  
    const setSuccessMessage = (successMessage: string) => {
        setState(true);
        setMsg(successMessage);
        setMsgType('success');
    };

    const setWarningMessage = (warningMessage: string) => {
        setState(true);
        setMsg(warningMessage);
        setMsgType('warning');
    };
    
    const setInfoMessage = (infoMessage: string) => {
        setState(true);
        setMsg(infoMessage);
        setMsgType('info');
    };
    
    const contextValue = {
        msg,
        state,
        msgType,
        handleState,
        setInfoMessage,
        setErrorMessage,
        setWarningMessage,
        setSuccessMessage
    };
    
    return (
        <ErrorContext.Provider value={contextValue}>
            {children}
        </ErrorContext.Provider>
    );
};

function useError(): ContextState {
    const context = useContext(ErrorContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}

export { ErrorProvider, useError };
