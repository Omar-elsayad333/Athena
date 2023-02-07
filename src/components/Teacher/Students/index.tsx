import { IStyle } from "styles/IStyle";
import StudentCard from "./StudentCard";
import MyTable from "components/MyTable";
import FilterWedgit from "../../FilterWedgit";
import MySelect from "components/MySelect";
import { useTheme } from "context/ThemeContext";
import { studentTable } from "content/tableHeader";
import MySearchInput from "components/MySearchInput";

// MUI
import Box from "@mui/material/Box";

type Props = {
    data: any;
    states: any;
    actions: any;
}

const StudentsC: React.FC<Props> = ({data, states, actions}) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        controles: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
        },
        showActionsContainer: {
            justifyItems: 'end',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '11px',
        }
    }

    return (
        <Box sx={style.container}>
            <MySelect
                data={data.years}
                value={states.selectedYear.value}
                getSelected={actions.selectedYearHandler}
                placeholder={'العام الدراسي'}
                error={states.selectedYear.error}
            /> 
            <MySearchInput 
                placeholder='هل تبحث عن طالب معين ؟'
                disabled={states.selectedYear.value ? false : true}
            />
            {
                states.selectedYear.value && 
                <Box sx={style.controles}>
                    <FilterWedgit
                        filters={data.levels}
                        allFilter='جميع الطلاب'
                        getSelected={actions.selectedLevelHandler}
                    />
                    <Box sx={style.showActionsContainer}>
                        <svg onClick={() => actions.showTable()} width="37" height="37" viewBox="0 0 37 37" fill={mainColors.primary.main} stroke={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="36" height="36" rx="6.5" fill="none" stroke="inherit"/>
                            <path d="M25.4667 17.4209H11.1132C10.4984 17.4209 10 17.8771 10 18.4398V18.5699C10 19.1326 10.4984 19.5887 11.1132 19.5887H25.4667C26.0815 19.5887 26.58 19.1326 26.58 18.5699V18.4398C26.58 17.8771 26.0815 17.4209 25.4667 17.4209Z" fill="inherit"/>
                            <path d="M25.4667 22.8389H11.1132C10.4984 22.8389 10 23.295 10 23.8578V23.9878C10 24.5505 10.4984 25.0067 11.1132 25.0067H25.4667C26.0815 25.0067 26.58 24.5505 26.58 23.9878V23.8578C26.58 23.295 26.0815 22.8389 25.4667 22.8389Z" fill="inherit"/>
                            <path d="M25.4667 12H11.1132C10.4984 12 10 12.4562 10 13.0189V13.149C10 13.7117 10.4984 14.1678 11.1132 14.1678H25.4667C26.0815 14.1678 26.58 13.7117 26.58 13.149V13.0189C26.58 12.4562 26.0815 12 25.4667 12Z" fill="inherit"/>
                        </svg>
                        <svg onClick={() => actions.hideTable()} width="37" height="37" viewBox="0 0 37 37" fill={mainColors.primary.main} stroke={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="36" height="36" rx="6.5" fill="none" stroke="inherit"/>
                            <path d="M11.369 10C10.9005 10 10.4425 10.1389 10.0529 10.3993C9.66329 10.6596 9.35964 11.0296 9.18033 11.4625C9.00103 11.8953 8.95411 12.3717 9.04552 12.8312C9.13693 13.2908 9.36256 13.7129 9.69388 14.0442C10.0252 14.3755 10.4473 14.6012 10.9069 14.6926C11.3664 14.784 11.8428 14.7371 12.2756 14.5578C12.7085 14.3785 13.0785 14.0748 13.3388 13.6852C13.5992 13.2956 13.7381 12.8376 13.7381 12.369C13.7381 11.7407 13.4885 11.1382 13.0442 10.6939C12.5999 10.2496 11.9974 10 11.369 10Z" fill="inherit"/>
                            <path d="M18.0602 10C17.5917 10 17.1336 10.1389 16.744 10.3993C16.3545 10.6596 16.0508 11.0296 15.8715 11.4625C15.6922 11.8953 15.6453 12.3717 15.7367 12.8312C15.8281 13.2908 16.0537 13.7129 16.385 14.0442C16.7164 14.3755 17.1385 14.6012 17.598 14.6926C18.0576 14.784 18.5339 14.7371 18.9668 14.5578C19.3997 14.3785 19.7697 14.0748 20.03 13.6852C20.2903 13.2956 20.4293 12.8376 20.4293 12.369C20.4293 11.7407 20.1797 11.1382 19.7354 10.6939C19.2911 10.2496 18.6885 10 18.0602 10Z" fill="inherit"/>
                            <path d="M24.7509 14.7381C25.2194 14.7381 25.6775 14.5992 26.0671 14.3388C26.4566 14.0785 26.7603 13.7085 26.9396 13.2756C27.1189 12.8428 27.1658 12.3664 27.0744 11.9069C26.983 11.4473 26.7574 11.0252 26.4261 10.6939C26.0947 10.3626 25.6726 10.1369 25.2131 10.0455C24.7535 9.95411 24.2772 10.001 23.8443 10.1803C23.4114 10.3596 23.0414 10.6633 22.7811 11.0529C22.5208 11.4425 22.3818 11.9005 22.3818 12.369C22.3818 12.9974 22.6314 13.5999 23.0757 14.0442C23.52 14.4885 24.1226 14.7381 24.7509 14.7381Z" fill="inherit"/>
                            <path d="M11.369 16.6924C10.9005 16.6924 10.4425 16.8313 10.0529 17.0916C9.66329 17.352 9.35964 17.7219 9.18033 18.1548C9.00103 18.5877 8.95411 19.0641 9.04552 19.5236C9.13693 19.9832 9.36256 20.4053 9.69388 20.7366C10.0252 21.0679 10.4473 21.2935 10.9069 21.385C11.3664 21.4764 11.8428 21.4295 12.2756 21.2501C12.7085 21.0708 13.0785 20.7672 13.3388 20.3776C13.5992 19.988 13.7381 19.53 13.7381 19.0614C13.7381 18.4331 13.4885 17.8305 13.0442 17.3863C12.5999 16.942 11.9974 16.6924 11.369 16.6924Z" fill="inherit"/>
                            <path d="M18.0602 16.6924C17.5917 16.6924 17.1336 16.8313 16.744 17.0916C16.3545 17.352 16.0508 17.7219 15.8715 18.1548C15.6922 18.5877 15.6453 19.0641 15.7367 19.5236C15.8281 19.9832 16.0537 20.4053 16.385 20.7366C16.7164 21.0679 17.1385 21.2935 17.598 21.385C18.0576 21.4764 18.5339 21.4295 18.9668 21.2501C19.3997 21.0708 19.7697 20.7672 20.03 20.3776C20.2903 19.988 20.4293 19.53 20.4293 19.0614C20.4293 18.4331 20.1797 17.8305 19.7354 17.3863C19.2911 16.942 18.6885 16.6924 18.0602 16.6924Z" fill="inherit"/>
                            <path d="M24.7509 16.6924C24.2823 16.6924 23.8243 16.8313 23.4347 17.0916C23.0451 17.352 22.7415 17.7219 22.5622 18.1548C22.3829 18.5877 22.3359 19.0641 22.4274 19.5236C22.5188 19.9832 22.7444 20.4053 23.0757 20.7366C23.407 21.0679 23.8292 21.2935 24.2887 21.385C24.7483 21.4764 25.2246 21.4295 25.6575 21.2501C26.0904 21.0708 26.4604 20.7672 26.7207 20.3776C26.981 19.988 27.1199 19.53 27.1199 19.0614C27.1199 18.4331 26.8703 17.8305 26.4261 17.3863C25.9818 16.942 25.3792 16.6924 24.7509 16.6924Z" fill="inherit"/>
                            <path d="M11.369 23.3828C10.9005 23.3828 10.4425 23.5218 10.0529 23.7821C9.66329 24.0424 9.35964 24.4124 9.18033 24.8453C9.00103 25.2782 8.95411 25.7545 9.04552 26.214C9.13693 26.6736 9.36256 27.0957 9.69388 27.427C10.0252 27.7583 10.4473 27.984 10.9069 28.0754C11.3664 28.1668 11.8428 28.1199 12.2756 27.9406C12.7085 27.7613 13.0785 27.4576 13.3388 27.068C13.5992 26.6784 13.7381 26.2204 13.7381 25.7519C13.7381 25.1236 13.4885 24.521 13.0442 24.0767C12.5999 23.6324 11.9974 23.3828 11.369 23.3828Z" fill="inherit"/>
                            <path d="M18.0602 23.3828C17.5917 23.3828 17.1336 23.5218 16.744 23.7821C16.3545 24.0424 16.0508 24.4124 15.8715 24.8453C15.6922 25.2782 15.6453 25.7545 15.7367 26.214C15.8281 26.6736 16.0537 27.0957 16.385 27.427C16.7164 27.7583 17.1385 27.984 17.598 28.0754C18.0576 28.1668 18.5339 28.1199 18.9668 27.9406C19.3997 27.7613 19.7697 27.4576 20.03 27.068C20.2903 26.6784 20.4293 26.2204 20.4293 25.7519C20.4293 25.1236 20.1797 24.521 19.7354 24.0767C19.2911 23.6324 18.6885 23.3828 18.0602 23.3828Z" fill="inherit"/>
                            <path d="M24.7509 23.3828C24.2823 23.3828 23.8243 23.5218 23.4347 23.7821C23.0451 24.0424 22.7415 24.4124 22.5622 24.8453C22.3829 25.2782 22.3359 25.7545 22.4274 26.214C22.5188 26.6736 22.7444 27.0957 23.0757 27.427C23.407 27.7583 23.8292 27.984 24.2887 28.0754C24.7483 28.1668 25.2246 28.1199 25.6575 27.9406C26.0904 27.7613 26.4604 27.4576 26.7207 27.068C26.981 26.6784 27.1199 26.2204 27.1199 25.7519C27.1199 25.1236 26.8703 24.521 26.4261 24.0767C25.9818 23.6324 25.3792 23.3828 24.7509 23.3828Z" fill="inherit"/>
                        </svg>  
                    </Box>
                </Box>
            }
            {
                states.tableState ?
                <MyTable headerData={studentTable} bodyData={data.students} /> :
                <StudentCard data={data.students} />
            }
        </Box>
    );
}

export default StudentsC;