import Link from 'next/link';
import {useEffect} from 'react';
import myStyle from './NavLink.module.css';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Button from '@mui/material/Button';

type Prop = {
    content: string;
    path: string;
    controleMobileSideNav: Function;
    children: any;
    currentPath: any;
}

const NavLink: React.FC<Prop> = ({children, content, path, controleMobileSideNav, currentPath}) => {
    
    const {mainColors, darkMode} = useContext(DarkThemeContext);

    useEffect(() => {
        if(path && currentPath) {
            const buttons = document.getElementsByClassName(`${myStyle.myButton}`);
            for (let i = 0; i < buttons.length; i++) {
                if(currentPath.includes(buttons[i]?.name)) {
                    buttons[i]?.classList.add(`${myStyle.active}`);
                }else{ 
                    buttons[i]?.classList.remove(`${myStyle.active}`);
                };
            };
        }
    }, [currentPath, path, darkMode]);

    const classes = {
        root: {
            width: '100%',
            height: '50px',
            padding: '15px 20px 15px 20px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '15px',
            fontSize: '22px',
            fontWeight: '700',
            border: 'none',
            color: mainColors.primary.main,
        },
    }

    return (
        <Link href={path}>
            <a>
                <Button name={path.slice(9)} sx={classes.root} className={myStyle.myButton} onClick={() => controleMobileSideNav()}>
                    { children }
                    { content }
                </Button>
            </a>
        </Link>
    );
}

export default NavLink;