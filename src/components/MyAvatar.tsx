import Image from 'next/image'

type Prop = {
    alt: string
    src: any
    width?: any
    height?: any
}

const MyAvatar: React.FC<Prop> = ({ alt, src, width, height }) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            blurDataURL={src}
            objectFit="cover"
            placeholder="blur"
            alt={alt || 'الصورة الشخصية'}
            style={{ borderRadius: '50%' }}
        />
    )
}

export default MyAvatar
