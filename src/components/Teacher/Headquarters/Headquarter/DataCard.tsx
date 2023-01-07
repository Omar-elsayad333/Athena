import { DarkThemeContext } from "context/ThemeContext";
import { useContext } from "react";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
    title: any;
}

const DataCard: React.FC<Props> = ({data, title}) => {

    const { mainColors } = useContext(DarkThemeContext);

    const style = {
        container: {
            height: '40px',
            padding: '10px 13px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
            borderRadius: '8px',
        },
    }

    return (
        <Box sx={style.container}>
            <Typography variant='h5' color='primary' fontWeight={700}>
                &nbsp;{title} :
            </Typography>
            <Typography variant='h5' color='primary' fontWeight={400}>
                &nbsp;{data}
            </Typography>
        </Box>
    );
}
 
export default DataCard;