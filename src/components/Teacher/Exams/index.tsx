import { IStyle } from "styles/IStyle";
import MySelect from "components/MySelect";
import { useTheme } from "context/ThemeContext";
import FilterWedgit from "components/FilterWedgit";
import MySearchInput from "components/MySearchInput";

// MUI
import Box from "@mui/material/Box";

type Props = {
    data: any;
    states: any;
    actions: any;
}

const ExamsC: React.FC<Props> = ({data, states, actions}) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        searchContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px'
        },
        dateFilter: {
            width: '59px',
            height: '59px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '7px',
            backgroundColor: mainColors.chips.main
        },
        examsCardContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            rowGap: '76px',
            columnGap: '48px'
        },
        examCard: {
            
        }
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
            <Box sx={style.searchContainer}>
                <MySearchInput
                    onChange={actions.searchHandler}
                    placeholder="هل تبحث عن نموذج امتحان معين ؟"
                    disabled={states.selectedYear.id ? false : true}
                />
                <Box sx={style.dateFilter}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.817 6.18165H26.2716V4.63624C26.2716 4.22637 26.1088 3.83328 25.8189 3.54346C25.5291 3.25364 25.136 3.09082 24.7262 3.09082C24.3163 3.09082 23.9232 3.25364 23.6334 3.54346C23.3436 3.83328 23.1807 4.22637 23.1807 4.63624V6.18165H13.9082V4.63624C13.9082 4.22637 13.7454 3.83328 13.4556 3.54346C13.1658 3.25364 12.7727 3.09082 12.3628 3.09082C11.953 3.09082 11.5599 3.25364 11.2701 3.54346C10.9802 3.83328 10.8174 4.22637 10.8174 4.63624V6.18165H9.27199C8.04238 6.18165 6.86313 6.67011 5.99367 7.53958C5.1242 8.40905 4.63574 9.58829 4.63574 10.8179V29.3629C4.63574 30.5925 5.1242 31.7718 5.99367 32.6412C6.86313 33.5107 8.04238 33.9992 9.27199 33.9992H27.817C29.0466 33.9992 30.2258 33.5107 31.0953 32.6412C31.9648 31.7718 32.4532 30.5925 32.4532 29.3629V10.8179C32.4532 9.58829 31.9648 8.40905 31.0953 7.53958C30.2258 6.67011 29.0466 6.18165 27.817 6.18165ZM9.27199 9.27249H10.8174V10.8179C10.8174 11.2278 10.9802 11.6209 11.2701 11.9107C11.5599 12.2005 11.953 12.3633 12.3628 12.3633C12.7727 12.3633 13.1658 12.2005 13.4556 11.9107C13.7454 11.6209 13.9082 11.2278 13.9082 10.8179V9.27249H23.1807V10.8179C23.1807 11.2278 23.3436 11.6209 23.6334 11.9107C23.9232 12.2005 24.3163 12.3633 24.7262 12.3633C25.136 12.3633 25.5291 12.2005 25.8189 11.9107C26.1088 11.6209 26.2716 11.2278 26.2716 10.8179V9.27249H27.817C28.2269 9.27249 28.6199 9.43531 28.9098 9.72513C29.1996 10.015 29.3624 10.408 29.3624 10.8179V16.9996H7.72658V10.8179C7.72658 10.408 7.8894 10.015 8.17922 9.72513C8.46904 9.43531 8.86212 9.27249 9.27199 9.27249ZM27.817 30.9083H9.27199C8.86212 30.9083 8.46904 30.7455 8.17922 30.4557C7.8894 30.1659 7.72658 29.7728 7.72658 29.3629V20.0904H29.3624V29.3629C29.3624 29.7728 29.1996 30.1659 28.9098 30.4557C28.6199 30.7455 28.2269 30.9083 27.817 30.9083Z" fill="inherit"/>
                        <path d="M12.3618 26.2715C13.2153 26.2715 13.9072 25.5796 13.9072 24.7261C13.9072 23.8726 13.2153 23.1807 12.3618 23.1807C11.5083 23.1807 10.8164 23.8726 10.8164 24.7261C10.8164 25.5796 11.5083 26.2715 12.3618 26.2715Z" fill="inherit"/>
                        <path d="M24.7271 23.1807H18.5454C18.1355 23.1807 17.7425 23.3435 17.4526 23.6333C17.1628 23.9231 17 24.3162 17 24.7261C17 25.136 17.1628 25.529 17.4526 25.8189C17.7425 26.1087 18.1355 26.2715 18.5454 26.2715H24.7271C25.137 26.2715 25.53 26.1087 25.8199 25.8189C26.1097 25.529 26.2725 25.136 26.2725 24.7261C26.2725 24.3162 26.1097 23.9231 25.8199 23.6333C25.53 23.3435 25.137 23.1807 24.7271 23.1807Z" fill="inherit"/>
                    </svg>
                </Box>
            </Box>
            {
                states.selectedYear.id &&
                <FilterWedgit
                    allFilter="جميع الامتحانات"
                    filters={data.examTypes}
                    getSelected={actions.filterByType}
                />
            }
            <Box sx={style.examsCardContainer}>
                {
                    data.exams.length > 0 &&
                    data.exams.map((exam: any) => (
                        <Box key={exam.id} sx={style.examCard}>
                            {exam.name}
                        </Box>
                    ))
                }   
            </Box>
        </Box>
    );
}

export default ExamsC;