import Image from 'next/image';
import myStyle from './NavLink.module.css';

// MUI
import Button from '@mui/material/Button';

type Prop = {
    icon: any;
    content: string;
}

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
        color: '#3F72A4',
    },
};

const NavLink: React.FC<Prop> = ({icon, content}) => {


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
        <Button sx={[classes.root]} className={myStyle.myButton} onClick={(e) => select(e)}>
            <Image src={icon} alt={content} layout='intrinsic' />
            {content}
        </Button>
    );
}

export default NavLink;