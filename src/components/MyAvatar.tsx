import Image from 'next/image';

type Prop = {
    alt: string;
    src?: any; 
    style?: object;
}

const classes = {
    root: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    }
}

const MyAvatar: React.FC<Prop> = ({alt, src}) => {
    return (
        <Image 
            alt={alt} 
            src={src} 
            style={classes.root}
        />
    );
}
 
export default MyAvatar;