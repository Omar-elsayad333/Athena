import Image from 'next/image';
import myStyle from './NavLink.module.css';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { darkColors, lightColors } from 'styles/colors';

type Prop = {
    icon: any;
    content: string;
    path: string;
    sideNavState: Boolean;
}

const NavLink: React.FC<Prop> = ({icon, content, path, sideNavState}) => {
    
    const {darkMode} = useContext(DarkThemeContext);

    const classes = {
        root: {
            width: '100%',
            height: '50px',
            padding: '15px 20px 15px 20px',
            display: 'flex',
            justifyContent: sideNavState ? 'start' : 'center',
            alignItems: 'center',
            gap: '15px',
            fontSize: '22px',
            fontWeight: '700',
            border: 'none',
            color: darkMode ? darkColors.primary.main : lightColors.primary.main ,
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
                    <Image src={icon} alt={content} layout='intrinsic' />
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