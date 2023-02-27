import { IStyle } from "styles/IStyle";
import Sections from "./steps/Sections";
import ExamBase from "./steps/ExamBase";
import ReviewSections from "./reviewSteps/ReviewSections";
// import MyButton from "components/Buttons/MyButton";
// import MyButtonError from "components/Buttons/MyButtonError";

// MUI
import Box from "@mui/material/Box";

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const ReviewExamC: React.FC<Props> = ({ data, states, actions }) => {

    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '95px',
        },
        buttonsContainer: {
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px'
        },
        submitButton: {
            width: '170px',
            height: '40px',
        }
    }

    return (
        <Box sx={style.container}>
            <ExamBase 
                data={data}
                states={states}
                actions={actions}
            />
            <Sections 
                data={data.sections}
                states={states}
                actions={actions}
            />
        </Box>
    );
}
 
export default ReviewExamC;