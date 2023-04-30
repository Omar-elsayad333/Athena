import { useContext } from 'react'
import { IStyle } from 'styles/IStyle'
import MySelect from 'components/MySelect'
import MyIconButton from 'components/MyIconButton'
import { DarkThemeContext } from 'context/ThemeContext'
import ClassesDialog from 'components/Dialogs/ClassesDialog'
import MyButton from 'components/Buttons/MyButton'
import MyButtonError from 'components/Buttons/MyButtonError'
// import BasicDialog from 'components/Dialogs';
// import PageError from 'components/Shared/PageError';

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

type Props = {
    data: any
    states: any
    actions: any
    dialog: any
}

const AddYearC: React.FC<Props> = ({ data, states, actions, dialog }) => {
    const { mainColors } = useContext(DarkThemeContext)

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
            <Box className="levels-contianer">
                <Box className="level-card"></Box>
            </Box>
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
