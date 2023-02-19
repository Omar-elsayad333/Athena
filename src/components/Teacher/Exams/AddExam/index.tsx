import { IStyle } from "styles/IStyle";
import Sections from "./steps/Sections";
import CreateExam from "./steps/CreateExam";

// MUI
import Box from "@mui/material/Box";

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const AddExamC: React.FC<Props> = ({ data, states, actions}) => {

    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '95px',
        }
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
                <Sections 
                    data={data.sections}
                    states={states}
                    actions={actions}
                />
            }
        </Box>
    );
}

export default AddExamC;