import PageHead from 'components/Shared/PageHead';
import StudentSignUp from '../components/StudentSignUp';

// MUI
import { NextPage } from "next";

const studentSignUp: NextPage = () => {
    return (
        <>
            <PageHead title='Student SignUp' />
            <StudentSignUp />
        </>
    );
}

export default studentSignUp;