import { useRouter } from 'next/router';
import { useState } from 'react'

const useLayout = () => {

    const router = useRouter();
    const [layoutState, setLayoutState] = useState<Boolean>(false);  
    const [sideNavState, setSideNavState] = useState<Boolean>(true);  

    const check = () => {
        if(
            router.pathname === '/teacherLogin' || 
            router.pathname === '/studentLogin' || 
            router.pathname === '/studentSignUp' ||
            router.pathname === '/'
        ) {
            setLayoutState(false)
        }else {
            setLayoutState(true);
        };
    };

    const closeSideNav = () => {
        setSideNavState(false);
    }

    const openSideNav = () => {
        setSideNavState(true);
    }

    return ({
        check,
        layoutState,
        sideNavState,
        closeSideNav,
        openSideNav,
    });
}
 
export default useLayout;