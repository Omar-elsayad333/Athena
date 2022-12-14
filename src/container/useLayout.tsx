import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

const useLayout = () => {

    const router = useRouter();
    const [layoutState, setLayoutState] = useState<Boolean>(false);  
    const [sideNavState, setSideNavState] = useState<Boolean>(true);  
    const [mobileSideNavState, setMobileSideNavState] = useState<Boolean>(false);  
    const [currentPath, setCurrentPath] = useState<string>('');  

    useEffect(() => {
        if(router.pathname){
            setCurrentPath(router.pathname.slice(9))
        }
    }, [router.pathname])
    
    const check = () => {
            router.pathname === '/teacherLogin' || 
            router.pathname === '/test' || 
            router.pathname === '/studentLogin' || 
            router.pathname === '/studentSignUp' ||
            router.pathname === '/' ?
            setLayoutState(false) :
            setLayoutState(true);
    };

    const controleSideNav = () => {
        sideNavState ? setSideNavState(false) : setSideNavState(true);
    }

    const controleMobileSideNav = () => {
        mobileSideNavState ? setMobileSideNavState(false) : setMobileSideNavState(true);
    }

    return ({
        check,
        layoutState,
        sideNavState,
        controleSideNav,
        mobileSideNavState,
        controleMobileSideNav,
        currentPath,
    });
}
 
export default useLayout;