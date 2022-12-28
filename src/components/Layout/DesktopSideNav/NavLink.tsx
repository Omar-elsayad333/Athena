import myStyle from './NavLink.module.css';
import { useContext, useEffect } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Typography } from '@mui/material';

type Prop = {
    content: string;
    path: string;
    sideNavState: Boolean;
    children: any;
    currentPath?: any;
}

const NavLink: React.FC<Prop> = ({content, path, sideNavState, children, currentPath}) => {
    
    const {mainColors, darkMode} = useContext(DarkThemeContext);

    useEffect(() => {
        if(path && currentPath) {
            const buttons = document.getElementsByClassName('myButton');
            for (let i = 0; i < buttons.length; i++) {
                if(currentPath.includes(buttons[i]?.name)) {
                    if(darkMode){
                        buttons[i]?.classList.add(`${myStyle.darkActive}`);
                    }else {
                        buttons[i]?.classList.add(`${myStyle.active}`);
                    }
                }else{ 
                    buttons[i]?.classList.remove(`${myStyle.active}`);
                    buttons[i]?.classList.remove(`${myStyle.darkActive}`);
                };
            };
        }
    }, [currentPath, path, sideNavState, darkMode]);

    const classes = {
        root: {
            width: '100%',
            height: '55px',
            padding: '15px 20px 15px 20px',
            display: 'flex',
            justifyContent: sideNavState ? 'start' : 'center',
            alignItems: 'start',
            gap: '15px',
            fontSize: '22px',
            fontWeight: '700',
            border: 'none',
            color: mainColors.primary.main,
            whiteSpace: 'noWrap',
            ':hover': {
                backgroundColor: darkMode ? '#162A3E !important' : '#A4C6E5 !important',
            }
        },
    };

    return (
        <Link href={path}>
            <a>
                <Button name={path.slice(9)} sx={classes.root} className={'myButton'}>
                    { children }
                    {
                        sideNavState &&
                        <Typography fontSize={22} fontWeight={700}>
                            { content }
                        </Typography>
                    }
                </Button>
            </a>
        </Link>
    );
}

export default NavLink;