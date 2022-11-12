import { useRouter } from 'next/router';
import { useState } from 'react'

const useLayout = () => {

    const router = useRouter();
    const [navState, setNavState] = useState<Boolean>(false);  

    const check = () => {
        if(
            router.pathname === '/teacherLogin' || 
            router.pathname === '/studentLogin' || 
            router.pathname === '/studentSignUp' || 
            router.pathname === '/'
        ) {
            setNavState(false)
        }else {
            setNavState(true);
        };
    };

    return ({
        check,
        navState
    });
}
 
export default useLayout;