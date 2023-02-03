import { useTheme } from "context/ThemeContext";

type Props = {
    content: string;
    type: string;
}

const InputError: React.FC<Props> = ({content, type}) => {

    const { mainColors } = useTheme()
    const errorStyle = {
        root: {
            marginTop: '10px',
            fontSize: '14px', 
            color: type == 'error' ? mainColors.error.main : 'rgba(63, 114, 164, 0.60)',
        }
    }

    return (
        <label style={errorStyle.root}>
            {content}
        </label>
    );
}

export default InputError;