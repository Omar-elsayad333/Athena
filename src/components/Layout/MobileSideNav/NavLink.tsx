import Image from 'next/image';
import myStyle from './NavLink.module.css';

// MUI
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

type Prop = {
    icon: any;
    content: string;
    path: string;
    controleMobileSideNav: Function;
}

const NavLink: React.FC<Prop> = ({icon, content, path, controleMobileSideNav}) => {
    
    const {mainColors} = useContext(DarkThemeContext);

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

    const select = (e: any) => {
        controleMobileSideNav();
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
                    {content}
                </Button>
            </a>
        </Link>
    );
}

export default NavLink;