import { IStyle } from "styles/IStyle";
import CreateExam from "./steps/createExam";
import { useTheme } from "context/ThemeContext";
// import TeacherAddExamLayer from "components/BigImages/TeacherAddExamLayer";

// MUI
import Box from "@mui/material/Box";

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
        </Box>
    );
}

export default AddExamC;