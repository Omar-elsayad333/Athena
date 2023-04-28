import Image from 'next/image'
import Urls from 'constant/url'

type Prop = {
    alt: string
    src?: any
    width?: any
    height?: any
}

const MyAvatar: React.FC<Prop> = ({ alt, src, width, height }) => {
    return (
        <Image
            alt={alt}
            src={`${Urls.URL_MAIN}/${src}`}
            width={width}
            height={height}
            style={{ borderRadius: '50%' }}
        />
    )
}

export default MyAvatar
