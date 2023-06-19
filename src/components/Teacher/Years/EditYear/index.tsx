import { useContext } from 'react'
import { IStyle } from 'styles/IStyle'
import MySelect from 'components/MySelect'
import MyIconButton from 'components/MyIconButton'
import { useTheme } from 'context/ThemeContext'
import ClassesDialog from 'components/Dialogs/ClassesDialog'
import useStyle from './styles'
// import MyButton from 'components/Buttons/MyButton';
// import MyButtonError from 'components/Buttons/MyButtonError';
// import BasicDialog from 'components/Dialogs/BasicDialogs';
// import PageError from 'components/Shared/PageError';

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { Button } from '@mui/material'
import MyButton from 'components/Buttons/MyButton'
import MyInputSmall from 'components/MyInputSmall'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const EditYearC: React.FC<Props> = ({ data, states, actions }) => {
    const styles = useStyle()
    const { mainColors } = useTheme()

    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        yearControlsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '43px',
        },
        deleteYearButton: {
            width: '214px',
            height: '40px',
            color: '#E8F3FF',
            background: mainColors.error.main,
            borderRadius: '7px',
            ':hover': {
                background: mainColors.error.main,
            },
        },
        endYearButton: {
            width: '214px',
            height: '40px',
            color: mainColors.error.main,
            background: 'transparent',
            borderRadius: '7px',
            border: `1px solid ${mainColors.error.main}`,
            ':hover': {
                background: 'transparent',
            },
        },
        backPaper: {
            width: 'fit-content',
            padding: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '46px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        classesList: {
            display: 'flex',
            gap: '25px',
            flexWrap: 'wrap',
        },
        classesLabel: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            border: `1px solid ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
        },
        semestersBackPaper: {
            width: 'fit-content',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '60px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        semeterContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '80px',
            rowGap: '30px',
        },
        semestersBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '29px',
        },
        semesterChip: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            border: `solid 1px ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.linerGradient.primary,
        },
        title: {
            flex: '100%',
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.yearControlsContainer}>
                <MySelect
                    value={states.selectedYear.name}
                    error={states.selectedYear.error}
                    getSelected={actions.getSelectedYear}
                    placeholder={states.year.name}
                    data={data.yearsToSelect}
                />
                <MyButton onClick={actions.updateYear} content="تأكيد" />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                تعديل الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper}>
                <MyIconButton
                    event={actions.classesHandleDialog}
                    icon={<ControlPointIcon />}
                    content="الصفوف الدراسية"
                />
                {data.levels.length > 0 && (
                    <Box sx={style.classesList}>
                        {data.levels.map((item: any) => {
                            return (
                                <Box key={item.id} sx={style.classesLabel}>
                                    {item.name}
                                </Box>
                            )
                        })}
                    </Box>
                )}
            </Box>
            {data.levels.length > 0 && (
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    تعديل بيانات العام الدراسي:-
                </Typography>
            )}
            {data.levels.length > 0 && (
                <Box sx={styles.levelsContianer} className="levels-contianer">
                    {data.levels.map((item: any) => (
                        <Box sx={styles.levelContainer} key={item.id}>
                            <Box
                                key={item.id}
                                sx={[
                                    styles.levelCard,
                                    { borderColor: item.error && mainColors.error.main },
                                ]}
                                className="level-card"
                            >
                                <Typography variant="h1" color={item.error ? 'error' : 'primary'}>
                                    {item.name}
                                </Typography>
                                <Box sx={styles.cardActionsContainer}>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill={mainColors.primary.main}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M32.3077 14.5335C32.996 14.5902 33.5093 15.1918 33.4543 15.8802C33.4443 15.9935 32.541 27.1785 32.021 31.8702C31.6977 34.7818 29.7743 36.5535 26.871 36.6068C24.6493 36.6452 22.506 36.6668 20.411 36.6668C18.1527 36.6668 15.951 36.6418 13.7727 36.5968C10.986 36.5418 9.05767 34.7352 8.74267 31.8818C8.21767 27.1485 7.31933 15.9918 7.311 15.8802C7.25433 15.1918 7.76767 14.5885 8.456 14.5335C9.13433 14.5152 9.74767 14.9918 9.80267 15.6785C9.80799 15.7508 10.1752 20.3069 10.5754 24.8147L10.6558 25.7142C10.8574 27.9549 11.0617 30.1079 11.2277 31.6068C11.406 33.2285 12.281 34.0652 13.8243 34.0968C17.991 34.1852 22.2427 34.1902 26.826 34.1068C28.466 34.0752 29.3527 33.2552 29.536 31.5952C30.0527 26.9385 30.9527 15.7918 30.9627 15.6785C31.0177 14.9918 31.626 14.5118 32.3077 14.5335ZM23.909 3.33398C25.439 3.33398 26.784 4.36565 27.179 5.84398L27.6023 7.94565C27.7391 8.63461 28.3437 9.13775 29.0438 9.1488L34.5133 9.14898C35.2033 9.14898 35.7633 9.70898 35.7633 10.399C35.7633 11.089 35.2033 11.649 34.5133 11.649L29.0926 11.6487C29.0842 11.6489 29.0758 11.649 29.0673 11.649L29.0267 11.6473L11.736 11.6488C11.7226 11.6489 11.7091 11.649 11.6957 11.649L11.67 11.6473L6.25 11.649C5.56 11.649 5 11.089 5 10.399C5 9.70898 5.56 9.14898 6.25 9.14898L11.7183 9.14732L11.8867 9.13666C12.5138 9.05529 13.0351 8.57898 13.1623 7.94565L13.5673 5.91898C13.979 4.36565 15.324 3.33398 16.854 3.33398H23.909ZM23.909 5.83398H16.854C16.454 5.83398 16.1023 6.10232 16.0007 6.48732L15.6123 8.43732C15.563 8.68431 15.4911 8.92234 15.3991 9.14943H25.3644C25.2723 8.92234 25.2002 8.68431 25.1507 8.43732L24.7457 6.41065C24.6607 6.10232 24.309 5.83398 23.909 5.83398Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <Box sx={styles.cardController}>
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill={mainColors.primary.main}
                                            xmlns="http://www.w3.org/2000/svg"
                                            onClick={(e) => {
                                                actions.openAndCloseCard(item.id)
                                                e.currentTarget.style.rotate == '0deg' ||
                                                e.currentTarget.style.rotate == ''
                                                    ? (e.currentTarget.style.rotate = '180deg')
                                                    : (e.currentTarget.style.rotate = '0deg')
                                            }}
                                        >
                                            <path
                                                d="M19.5446 26.0586C19.1641 26.0593 18.7953 25.9268 18.5022 25.684L8.72975 17.5402C8.39713 17.2637 8.18796 16.8665 8.14825 16.4358C8.10854 16.0051 8.24155 15.5763 8.51801 15.2437C8.79447 14.911 9.19174 14.7019 9.62243 14.6622C10.0531 14.6225 10.4819 14.7555 10.8145 15.0319L19.5446 22.3287L28.2747 15.2925C28.4413 15.1572 28.633 15.0562 28.8388 14.9952C29.0446 14.9343 29.2604 14.9146 29.4738 14.9373C29.6872 14.96 29.894 15.0246 30.0824 15.1275C30.2707 15.2304 30.4369 15.3695 30.5713 15.5368C30.7204 15.7043 30.8334 15.9008 30.9031 16.1139C30.9728 16.3271 30.9977 16.5524 30.9763 16.7756C30.9549 16.9988 30.8876 17.2153 30.7787 17.4113C30.6698 17.6073 30.5215 17.7787 30.3433 17.9148L20.5708 25.7817C20.2693 25.9861 19.908 26.0836 19.5446 26.0586Z"
                                                fill="inherit"
                                            />
                                        </svg>
                                    </Box>
                                </Box>
                            </Box>
                            {item.open && (
                                <Box sx={styles.cardDetails}>
                                    <Box sx={styles.semestersContainer}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color={mainColors.title.main}
                                        >
                                            الفصول الدراسية الخاصة بالصف:-
                                        </Typography>
                                        <Box sx={styles.semesterChips}>
                                            <Box sx={style.classesLabel}>الفصل الدراسي الاول</Box>
                                            <Box sx={style.classesLabel}>الفصل الدراسي الثاني</Box>
                                        </Box>
                                    </Box>
                                    <Box sx={styles.semestersContainer}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color={mainColors.title.main}
                                        >
                                            حدد المصروفات الدراسية الخاصة بالصف:-
                                        </Typography>
                                        <Box sx={styles.semesterChips}>
                                            <Box sx={styles.inputContaienr}>
                                                <Typography
                                                    variant="h5"
                                                    color={mainColors.title.main}
                                                >
                                                    المقدم
                                                </Typography>
                                                <MyInputSmall
                                                    indexes={item.id}
                                                    value={item.introFee}
                                                    type="number"
                                                    placeholder="حدد المقدم الخاص بك"
                                                    onChange={actions.selectedIntroFeeHandler}
                                                />
                                            </Box>
                                            <Box sx={styles.inputContaienr}>
                                                <Typography
                                                    variant="h5"
                                                    color={mainColors.title.main}
                                                >
                                                    المصروفات الشهرية
                                                </Typography>
                                                <MyInputSmall
                                                    indexes={item.id}
                                                    value={item.monthFee}
                                                    type="number"
                                                    placeholder="حدد المصروفات الشهرية"
                                                    onChange={actions.selectedMonthFeeHandler}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box></Box>
                                </Box>
                            )}
                        </Box>
                    ))}
                    <Box sx={styles.actionButtons}>
                        <Button sx={style.endYearButton} onClick={actions.endYear}>
                            <Typography fontSize={'h4'} fontWeight={700}>
                                إنهاء العام الدراسي
                            </Typography>
                        </Button>
                        <Button sx={style.deleteYearButton} onClick={actions.deleteYear}>
                            <Typography fontSize={'h4'} fontWeight={700}>
                                حذف العام الدراسي
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            )}
            {/* <Box sx={style.buttonsContainer}>
                <PageError errorInfo={states.errorLabel} />
                <Box sx={style.submitButton}>
                    <MyButton onClick={actions.submit} loading={states.loading} content='تأكيد واضافة' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError loading={states.loading} content='إلغاء العملية' onClick={dialogs.actions.handleDialogState} />
                </Box>
            </Box> */}
            {/* <BasicDialog state={dialogs.content.state} content={dialogs.content} actions={dialogs.actions} /> */}
            <ClassesDialog
                data={data.requiredData}
                open={states.classesDialogState}
                handleClose={actions.classesHandleDialog}
                getSelectedClasses={actions.handleSelectedClasses}
            />
        </Box>
    )
}

export default EditYearC
