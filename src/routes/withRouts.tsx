// import {useContext} from 'react';
// import { UserContext } from 'context/userContext';
import { Routes } from './Routes';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import { NextComponentType, NextPageContext } from 'next';
import { useUser } from 'context/userContext';

type ComponentNext = NextComponentType<NextPageContext, any, {}>;

export const withPublic = (Component: ComponentNext) => (props: any) => {
    // const auth = useUser();
    // const router = useRouter();

    // const referLink = router.asPath.split('refer=')[1];

    // if(typeof window !== 'undefined'){
    //     if (!auth.user) {d   
    //         // router.replace(referLink || Routes.teacherHome);
    //         return <Loading />;
    //     }
    // }
    return <Component {...props} />;
};

export const withProtected = (Component: any) => (props: any) => {  

    const auth = useUser();
    const router = useRouter();
    
    if(typeof window !== 'undefined'){
        if (!localStorage.getItem('athena-token')) {
            router.replace(`${Routes.loginLink}`);
            return <Loading />;
        }
    }
    
    if(!auth.user){
        return <Loading />;
    }
    
    return <Component {...props} />;
};
