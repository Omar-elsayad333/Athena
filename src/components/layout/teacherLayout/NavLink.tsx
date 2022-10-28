import Image from 'next/image';
import meStyle from './NavLink.module.css';

// MUI
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";

type Prop= {
    icon: any;
    content: string;
    style: any;
}

const NavLink: React.FC<Prop> = ({icon, content, style}) => {

    
    const select = (e: any) => {
        const buttons = document.getElementsByClassName(meStyle.x);

        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i] === e.currentTarget) {
                buttons[i].classList.add(meStyle.active);
            }else {
                buttons[i].classList.remove(meStyle.active);
            };
        };
    };

    return (
        <Button sx={[style]} className={meStyle.x} onClick={(e) => select(e)}>
            <Box sx={style.icon}>
                <Box sx={style.iconBackground}>
                    <Image alt={content} src={icon} width='38px' height='38px' />
                </Box>
            </Box>
            {content}
        </Button>
    );
}

export default NavLink;