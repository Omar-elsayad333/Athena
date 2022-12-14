import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

const useLayout = () => {

    const router = useRouter();
    const [layoutState, setLayoutState] = useState<Boolean>(false);  
    const [sideNavState, setSideNavState] = useState<Boolean>(true);  
    const [mobileSideNavState, setMobileSideNavState] = useState<Boolean>(false);  
    const [currentPath, setCurrentPath] = useState<string>('');  
    
    // useEffect(() => {
    //     function handleResize() {
    //         setWindowDimensions(getWindowDimensions());
    //     }
    //     window.addEventListener('resize', handleResize);
    //     console.log(windowDimensions)
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);
    
    // function getWindowDimensions() {
    //     if (typeof window !== "undefined") {
    //         // browser code
    //         const { innerWidth: width, innerHeight: height } = window;
    //         return {
    //             width,
    //             height
    //         };
    //     }else {
    //         return null
    //     }
    // }

    useEffect(() => {
        const newPath = router.pathname.slice(9)
        console.log(newPath);
        setCurrentPath(newPath)
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