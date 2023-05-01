import { IStyle } from 'styles/IStyle'
import MySelect from 'components/MySelect'
import { useTheme } from 'context/ThemeContext'
import MyIconButton from 'components/MyIconButton'
import MyButton from 'components/Buttons/MyButton'
import ClassesDialog from 'components/Dialogs/ClassesDialog'
import MyButtonError from 'components/Buttons/MyButtonError'
// import BasicDialog from 'components/Dialogs';
// import PageError from 'components/Shared/PageError';

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import useStyle from './styles'

type Props = {
    data: any
    states: any
    actions: any
    dialog: any
}

const AddYearC: React.FC<Props> = ({ data, states, actions, dialog }) => {
    const styles = useStyle()
    const { mainColors } = useTheme()

    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
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
            <MySelect
                data={data.yearsToSelect}
                value={states.selectedYear.name}
                error={states.selectedYear.error}
                placeholder="تحديد العام الدراسي"
                getSelected={actions.selectedYearHandler}
            />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                تحديد الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper}>
                <MyIconButton
                    event={actions.classesHandleDialog}
                    icon={<ControlPointIcon />}
                    content="الصفوف الدراسية"
                />
                {data.selectedLevels.length > 0 && (
                    <Box sx={style.classesList}>
                        {data.selectedLevels.map((item: any) => {
                            return (
                                <Box key={item.id} sx={style.classesLabel}>
                                    {item.name}
                                </Box>
                            )
                        })}
                    </Box>
                )}
            </Box>
            {data.selectedLevels.length > 0 && (
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    تحديد بيانات العام الدراسي:-
                </Typography>
            )}
            {data.selectedLevels.length > 0 && (
                <Box sx={styles.levelsContianer} className="levels-contianer">
                    <Box sx={styles.levelCard} className="level-card">
                        <Typography variant="h1" color={'primary'}>
                            {data.selectedLevels.value}asdfasdf
                        </Typography>
                        <Box sx={styles.cardButton}>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill={mainColors.primary.main}
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={(e) => {
                                    e.currentTarget.style.transition = '.5s'
                                    e.currentTarget.style.rotate == '0deg' ||
                                    e.currentTarget.style.rotate == ''
                                        ? (e.currentTarget.style.rotate = '180deg')
                                        : (e.currentTarget.style.rotate = '0deg')
                                }}
                            >
                                <path
                                    d="M19.545 13.0313C19.9255 13.0305 20.2943 13.1631 20.5874 13.4059L30.3599 21.5496C30.6925 21.8261 30.9016 22.2234 30.9414 22.6541C30.9811 23.0847 30.8481 23.5136 30.5716 23.8462C30.2951 24.1788 29.8979 24.388 29.4672 24.4277C29.0365 24.4674 28.6077 24.3344 28.2751 24.0579L19.545 16.7611L10.8149 23.7973C10.6483 23.9326 10.4566 24.0336 10.2508 24.0946C10.045 24.1556 9.82921 24.1753 9.6158 24.1526C9.40238 24.1299 9.19556 24.0652 9.00722 23.9623C8.81887 23.8594 8.65272 23.7203 8.51831 23.553C8.36915 23.3855 8.25619 23.1891 8.18649 22.9759C8.11679 22.7627 8.09186 22.5375 8.11327 22.3142C8.13468 22.091 8.20195 21.8746 8.31089 21.6786C8.41983 21.4825 8.56808 21.3111 8.74634 21.175L18.5188 13.3082C18.8203 13.1037 19.1816 13.0062 19.545 13.0313Z"
                                    fill="inherit"
                                />
                            </svg>
                        </Box>
                    </Box>
                </Box>
            )}
            <Box sx={style.buttonsContainer}>
                {/* <PageError errors={states.errorLabel} /> */}
                <Box sx={style.submitButton}>
                    <MyButton
                        onClick={actions.submit}
                        loading={states.loading}
                        content="تأكيد واضافة"
                    />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError
                        loading={states.loading}
                        content="إلغاء العملية"
                        onClick={dialog.actions.handleDialogState}
                    />
                </Box>
            </Box>
            {/* <BasicDialog state={dialog.content.state} content={dialog.content} actions={dialog.actions} /> */}
            <ClassesDialog
                data={data.requiredData}
                open={states.classesDialogState}
                handleClose={actions.classesHandleDialog}
                getSelectedClasses={actions.selectedLevelsHandler}
            />
        </Box>
    )
}

export default AddYearC
