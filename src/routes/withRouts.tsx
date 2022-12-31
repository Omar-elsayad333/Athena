import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import Loading from 'components/Loading';
import { useUser } from 'context/userContext';

import { Routes } from './Routes';

type ComponentNext = NextComponentType<NextPageContext, any, {}>;

export const withPublic = (Component: ComponentNext) => (props: any) => {
    const auth = useUser();
    const router = useRouter();

    const referLink = router.asPath.split('refer=')[1];

    if (auth.user) {
        router.replace(referLink || Routes.homeLink);
        return <Loading />;
    }
    return <Component {...props} />;
};

export const withProtected = (Component: any) => (props: any) => {
    
    const auth = useUser();
    const router = useRouter();

    if (!auth.user) {
        typeof window !== 'undefined' && router.replace(`${Routes.loginLink}`);
        return <Loading />;
    }
    return <Component {...props} />;
};
