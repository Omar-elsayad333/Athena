import Avatar from '@mui/material/Avatar';

type Prop = {
    alt: string;
    src: any; 
    style: object;
}

const MyAvatar: React.FC<Prop> = ({alt, src, style}) => {
    return (
        <Avatar 
            alt={alt} 
            src={`${src}`} 
            sx={style}
        />
    );
}
 
export default MyAvatar;