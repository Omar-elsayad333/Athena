import PageTitle from 'components/Shared/PageTitle';
import GroupsIcon from '../../../public/images/GroupsIcon.svg';

// MUI
import Box from "@mui/material/Box";


const TeacherAddGroup: React.FC = () => {

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
    }

    return (
        <Box sx={style.container}>
            <PageTitle icon={GroupsIcon} content='اضافة مجموعة جديدة' />
        </Box>
    );
}
 
export default TeacherAddGroup;