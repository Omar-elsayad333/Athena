import { Routes } from './Routes';
import { useRouter } from 'next/router';
import { useUser } from 'context/userContext';
import Loading from 'components/Loading/Loading';
import { NextComponentType, NextPageContext } from 'next';

type ComponentNext = NextComponentType<NextPageContext, any, {}>;

export const withLogin = (Component: ComponentNext) => (props: any) => {  
    const router = useRouter();
    const { authToken } = useUser();
    
    if(typeof window !== 'undefined'){
        if (authToken || localStorage.getItem('athena-token')) {
            router.replace(`${Routes.teacherHome}`);
            return <Loading />
        }
    }
    
    return <Component {...props} />
};
