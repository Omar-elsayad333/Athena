import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

type Props = {
    errorInfo: any;
}

const PageError: React.FC<Props> = ({errorInfo}) => {

    const { mainColors } = useContext(DarkThemeContext);

    return (
        <>
            {
                errorInfo.error &&
                <label style={{color: mainColors.error.main, fontSize: '14px', flex: '100%'}}>
                    {errorInfo.value}
                </label>
            }
        </>
    );
}
 
export default PageError;