
// import {useContext} from 'react';
// import { UserContext } from 'context/userContext';
import { Routes } from './Routes';
import { useRouter } from 'next/router';
import Loading from 'components/Loading/Loading';
import { NextComponentType, NextPageContext } from 'next';
import { useUser } from 'context/userContext';

type ComponentNext = NextComponentType<NextPageContext, any, {}>;

export const withPublic = (Component: ComponentNext) => (props: any) => {

    const router = useRouter();
    const { authToken } = useUser();

    if(typeof window !== 'undefined'){
        if (localStorage.getItem('athena-token') || localStorage.getItem('athena-token') || authToken) {  
            router.replace(Routes.teacherHome);
            return <Loading />;
        }
    }

    return <Component {...props} />;
};

export const withProtected = (Component: any) => (props: any) => {  

    const router = useRouter();
    // const { authToken } = useUser();
    
    if(typeof window !== 'undefined'){
        if (!localStorage.getItem('athena-token') && !sessionStorage.getItem('athena-token')) {
            router.replace(Routes.teacherLogin);
            return <Loading />;
        }
    }
    
    return <Component {...props} />;
};