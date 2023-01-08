import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

type Props = {
    infoObject: any;
}

const PageError: React.FC<Props> = ({infoObject}) => {

    const { mainColors } = useContext(DarkThemeContext);

    return (
        <>
            {
                infoObject.error &&
                <label style={{color: mainColors.error.main, fontSize: '14px', flex: '100%'}}>
                    {infoObject.value}
                </label>
            }
        </>
    );
}
 
export default PageError;