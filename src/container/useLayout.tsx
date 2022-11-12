import { useRouter } from 'next/router';
import { useState } from 'react'

const useLayout = () => {

    const router = useRouter();
    const [navState, setNavState] = useState<Boolean>(false);
    const routes = [
        '/',
        '/teacherLogin',
        '/studentLogin',
        '/studentSignUp'
    ]

    const check = () => {
        for (let i = 0; i < routes.length; i++) {
            if(router.pathname === routes[i]) {
                setNavState(false);
            }else {
                setNavState(true);
            }
        };
    };

    return ({
        check,
        navState
    });
}
 
export default useLayout;