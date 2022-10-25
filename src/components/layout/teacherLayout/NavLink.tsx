import Image from 'next/image';

// MUI
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";

type Prop= {
    icon: any;
    content: string;
    style: any;
}

const NavLink: React.FC<Prop> = ({icon, content, style}) => {
    return (
            <Button sx={[style, style.active]}>
                <Box sx={style.icon}>
                    <Image alt={content} src={icon} width='38px' height='38px' />
                </Box>
                {content}
            </Button>
    );
}

export default NavLink;