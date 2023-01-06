// import {useContext} from 'react';
// import { UserContext } from 'context/userContext';
import { Routes } from './Routes';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import { NextComponentType, NextPageContext } from 'next';

type ComponentNext = NextComponentType<NextPageContext, any, {}>;

export const withPublic = (Component: ComponentNext) => (props: any) => {
    // const { user } = useContext(UserContext);
    // const router = useRouter();

    // const referLink = router.asPath.split('refer=')[1];

    // if(typeof window !== 'undefined'){
    //     if (user) {
    //         router.replace(Routes.teacherHome);
    //         return <Loading />;
    //     }
    // }
    return <Component {...props} />;
};

export const withProtected = (Component: any) => (props: any) => {
    
    const router = useRouter();
    
    if(typeof window !== 'undefined'){
        if (!localStorage.getItem('athena-token')) {
            router.replace(`${Routes.loginLink}`);
            return <Loading />;
        }
    }
    return <Component {...props} />;
};
