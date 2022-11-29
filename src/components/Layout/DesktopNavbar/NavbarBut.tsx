// MUI
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Link from 'next/link';

type Props = {
    content?: any;
    path: any;
}

const MyButton = styled(Button)({
    width: '202px',
    height: '46px',
    fontSize: '20px',
    fontWeight: '700',
    borderRadius: '7px',
    boxShadow: 'none',
    '@media(max-width: 1200px)': {
        width: '170px',
        height: '40px',
        fontSize: '16px',
        padding: '9px 5px',
        borderRadius: '21px',
    },
    '@media(max-width: 400px)': {
        fontSize: '13px',
    },
});

const NavbarBut: React.FC<Props> = ({content, path}) => {
    return (
        <Link href={path || ''}>
            <a>
                <MyButton variant="contained">
                    {content}
                </MyButton>
            </a>
        </Link>
    );
}
 
export default NavbarBut;