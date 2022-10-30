import style from './style'

type Props = {
    inputType: any;
    placeholder: any;
}

const MySmallInput: React.FC<Props> = ({inputType, placeholder}) => {
    return (
        <input type={inputType} placeholder={placeholder} style={{...style.myInput, ...style.mySmallInput}}/>
    );
}
 
export default MySmallInput;