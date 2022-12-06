import { DarkThemeContext } from "context/ThemeContext";
import { useContext, useEffect } from "react";

const useThemeSwitcher = () => {

    const {darkMode, handelDarkTheme} = useContext(DarkThemeContext);

    useEffect(() => {
        const switcher = document.getElementById('switcher');
        const container = document.getElementById('container');
        
        if(darkMode && switcher && container) {
            switcher.style.right = '5px';
            switcher.style.background = '#E8F3FF';
            container.style.background = '#3F72A4';
            container.style.boxShadow = 'none';
        }else if(switcher && container) {
            switcher.style.right = '45px';
            switcher.style.background = '#3F72A4';
            container.style.boxShadow = '0px 0px 10px 1px #B6D5F0';
            container.style.background = '#E8F3FF';
        }
        
    }, [darkMode])

    const handleSwitch = () => {
        const switcher = document.getElementById('switcher');
        const container = document.getElementById('container');
        
        if(darkMode && switcher && container) {
            switcher.style.right = '5px';
            switcher.style.background = '#E8F3FF';
            container.style.background = '#1C364F';
            handelDarkTheme();
        }else if(switcher && container) {
            switcher.style.right = '45px';
            switcher.style.background = '#3F72A4';
            container.style.background = '#B6D5F0';
            handelDarkTheme();
        }
    }

    return (
        {
            handleSwitch
        }
    );
}
 
export default useThemeSwitcher;