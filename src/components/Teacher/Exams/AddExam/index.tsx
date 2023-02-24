import { IStyle } from "styles/IStyle";
import Sections from "./steps/Sections";
import CreateExam from "./steps/CreateExam";
import MyButton from "components/Buttons/MyButton";
import MyButtonError from "components/Buttons/MyButtonError";

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
            {
                states.examReady &&
                <Box sx={style.buttonsContainer}>
                    <Box sx={style.submitButton}> 
                        <MyButton content='تأكيد واضافة' loading={states.loading} onClick={actions.sendDataToReview} />
                    </Box>
                    <Box sx={style.submitButton}>
                        <MyButtonError loading={states.loading} content='إلغاء العملية' onClick={() => {}} />
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default AddExamC;