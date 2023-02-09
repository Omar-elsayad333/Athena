import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useLayout = () => {

    const router = useRouter();
    const [sideNavState, setSideNavState] = useState<Boolean>(true);  
    const [mobileSideNavState, setMobileSideNavState] = useState<Boolean>(false);  
    const [currentPath, setCurrentPath] = useState<string>('');  

    useEffect(() => {
        if(router.pathname){
            setCurrentPath(router.pathname.slice(9))
        }
    }, [router.pathname]);

    const controleSideNav = () => {
        sideNavState ? setSideNavState(false) : setSideNavState(true);
    }

    const controleMobileSideNav = () => {
        mobileSideNavState ? setMobileSideNavState(false) : setMobileSideNavState(true);
    }

    return ({
        sideNavState,
        controleSideNav,
        mobileSideNavState,
        controleMobileSideNav,
        currentPath,
    });
}
 
export default useLayout;