import { useState } from 'react';

const useStudents = () => {

    const [tableState, setTableState] = useState<boolean>(false);

    const showTable = () => {
        setTableState(true);
    };

    const hideTable = () => {
        setTableState(false);
    };

    return (
        {
            tableState,
            showTable,
            hideTable
        }
    );
}
 
export default useStudents;