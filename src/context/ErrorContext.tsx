import { useState, useContext, createContext} from 'react';

type ContextState = {
    msg: string;
    state: boolean;
    handleState: Function;
    msgType: object;
    setInfoMessage: (message: string) => void | null;
    setErrorMessage: (message: string) => void | null;
    setSuccessMessage: (message: string) => void | null;
};

const ErrorContext = createContext<ContextState>({
    msg: '',
    state: false,
    msgType: {value: ''},
    handleState: () => {},
    setInfoMessage: () => {},
    setErrorMessage: () => {},
    setSuccessMessage: () => {}
});

type MsgType = {
    value: string;
};

const msgTypeInitialValues = {
    value: ''
};

type Props = {
    children: React.ReactElement<any, any> & React.ReactNode;
};

const ErrorProvider: React.FC<Props> = ({ children }) => {

    const [msg, setMsg] = useState<string>('');
    const [state, setState] = useState<boolean>(false);
    const [msgType, setMsgType] = useState<MsgType>(msgTypeInitialValues);

    const handleState = () => {
        if(state){
            setState(false);
        }else {
            setState(true);
        };
    };

    const setErrorMessage = (errorMessage: string) => {
        setState(true);
        setMsg(errorMessage);
        setMsgType(() => ({
            value: 'error'
        }));
    };
  
    const setSuccessMessage = (successMessage: string) => {
        setState(true);
        setMsg(successMessage);
        setMsgType(() => ({
            value: 'success'
        }));
    };
    
    const setInfoMessage = (infoMessage: string) => {
        setState(true);
        setMsg(infoMessage);
        setMsgType(() => ({
            value: 'info'
        }));
    };
    
    const contextValue = {
        msg,
        state,
        msgType,
        handleState,
        setInfoMessage,
        setErrorMessage,
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
