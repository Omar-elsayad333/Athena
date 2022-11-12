import Image from 'next/image';
import myStyle from './NavLink.module.css';

// MUI
import Button from '@mui/material/Button';
import Link from 'next/link';

type Prop = {
    icon: any;
    content: string;
    path: string;
    sideNavState: Boolean;
}

// const classes = {
//     root: {
//         width: '100%',
//         height: '50px',
//         padding: '15px 20px 15px 20px',
//         display: 'flex',
//         justifyContent: 'start',
//         alignItems: 'center',
//         gap: '15px',
//         fontSize: '22px',
//         fontWeight: '700',
//         border: 'none',
//         color: '#3F72A4',
//     }
// }

const NavLink: React.FC<Prop> = ({icon, content, path, sideNavState}) => {

    const select = (e: any) => {
        const buttons = document.getElementsByClassName(`${myStyle.root}`);

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
                <Button className={myStyle.root} onClick={(e) => select(e)}>
                    <Image src={icon} alt={content} layout='intrinsic' />
                    {sideNavState && content}
                </Button>
            </a>
        </Link>
    );
}

export default NavLink;