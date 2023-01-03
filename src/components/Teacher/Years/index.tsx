import YearCard from "./YearCard";

// MUI
import Box from "@mui/material/Box";
import useYears from "container/years/useYears";

const YearsC: React.FC = () => {

    const { data } = useYears()

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        }
    }

    return (
        <Box sx={style.container}>
            <YearCard data={data} />
        </Box>
    );
}
 
export default YearsC;