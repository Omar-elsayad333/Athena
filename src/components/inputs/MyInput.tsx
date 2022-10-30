import style from './style';

type Props = {
    inputType: any;
    placeholder: any;
}

const MyInput: React.FC<Props> = ({inputType, placeholder}) => {
    return (
        <input type={inputType} placeholder={placeholder} style={style.myInput} className='myInput' />
    );
}

export default MyInput;