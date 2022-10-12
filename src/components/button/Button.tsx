import style from './style'

type Props = {
    content: any;
}

const Button: React.FC<Props> = ({content}) => {
    return (
        <button style={style.root}>
            {content}
        </button>
    );
}

export default Button;