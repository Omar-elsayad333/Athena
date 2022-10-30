type Props = {
    inputType: any;
    placeholder: any;
}

const MyInput: React.FC<Props> = ({inputType, placeholder}) => {
    return (
        <input type={inputType} placeholder={placeholder} className='myInput' />
    );
}

export default MyInput;