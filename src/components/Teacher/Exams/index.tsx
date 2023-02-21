import { IStyle } from "styles/IStyle";
import MySelect from "components/MySelect";
import FilterWedgit from "components/FilterWedgit";

// MUI
import Box from "@mui/material/Box";

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const ExamsC: React.FC<Props> = ({data, states, actions}) => {

    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
    }

    return (
        <Box sx={style.container}>
            <MySelect
                placeholder="اختار العام الدراسي"
                data={data.years}
                value={states.selectedYear.value}
                error={states.selectedYear.error}
                getSelected={actions.selectedYearHandler}
                helperText={states.selectedYear.helperText}
            />
            {/* <FilterWedgit
                filters={}
                getSelected={()=>{}}
            /> */}
        </Box>
    );
}

export default ExamsC;