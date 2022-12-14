import myStyle from './NavLink.module.css';
import { useContext } from 'react';
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
}

const NavLink: React.FC<Prop> = ({content, path, sideNavState, children}) => {
    
    const {mainColors} = useContext(DarkThemeContext);

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
        },
    };

    const select = (e: any) => {
        const buttons = document.getElementsByClassName(`${myStyle.myButton}`);
        
        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] === e.currentTarget) {
                buttons[i]?.classList.add(`${myStyle.active}`);
            }else { 
                buttons[i]?.classList.remove(`${myStyle.active}`);
            };
        };
    };

    return (
        <Link href={path}>
            <a>
                <Button sx={classes.root} className={myStyle.myButton} onClick={(e) => select(e)}>
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