import { DarkThemeContext } from "context/ThemeContext";
import useClassifications from "hooks/useClassifications";
import { useContext, useEffect } from "react";

const useThemeSwitcher = () => {

    const {darkMode, handelDarkTheme} = useContext(DarkThemeContext);
    const {data, error} = useClassifications();

    useEffect(() => {
        const switcher = document.getElementById('switcher');
        const container = document.getElementById('container');
        
        if(darkMode && switcher && container) {
            switcher.style.right = '5px';
            switcher.style.background = 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)';
            container.style.background = 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)';
        }else if(switcher && container) {
            switcher.style.right = '45px';
            switcher.style.background = 'linear-gradient(180deg, #B6D5F0 0%, #DFEFFF 100%)';
            container.style.background = 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)';
        }
        
    }, [darkMode])

    const handleSwitch = () => {
        const switcher = document.getElementById('switcher');
        const container = document.getElementById('container');
        
        if(darkMode && switcher && container) {
            switcher.style.right = '5px';
            switcher.style.background = 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)';
            container.style.background = 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)';
            handelDarkTheme();
        }else if(switcher && container) {
            switcher.style.right = '45px';
            switcher.style.background = 'linear-gradient(180deg, #B6D5F0 0%, #DFEFFF 100%)';
            container.style.background = 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)';
            handelDarkTheme();
        }
    }

    return (
        {
            handleSwitch,
            data,
            error
        }
    );
}
 
export default useThemeSwitcher;