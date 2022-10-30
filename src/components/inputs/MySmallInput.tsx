type Props = {
    inputType: any;
    placeholder: any;
}

const MySmallInput: React.FC<Props> = ({inputType, placeholder}) => {
    return (
        <input type={inputType} placeholder={placeholder} className='myInput mySmallInput' />
    );
}

export default MySmallInput;