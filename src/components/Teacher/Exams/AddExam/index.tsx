import { IStyle } from "styles/IStyle";
import CreateExam from "./steps/CreateExam";
import { useTheme } from "context/ThemeContext";
import AdvancedDataForm from "./steps/AdvancedDataForm";

// MUI
import Box from "@mui/material/Box";
import Sections from "./steps/Sections";

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const AddExamC: React.FC<Props> = ({ data, states, actions}) => {

    const {  } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '95px',
        },
    }

    return (
        <Box sx={style.container}>
            <CreateExam 
                data={data}
                states={states}
                actions={actions}
            />
            {
                states.examReady &&
                <AdvancedDataForm 
                    data={data}
                    states={states}
                    actions={actions}
                />
            }
            <Sections 
                data={data.sections}
                states={states}
                actions={actions}
            />
        </Box>
    );
}

export default AddExamC;