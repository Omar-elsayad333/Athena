import Urls from 'constant/urls'
import { IStyle } from 'styles/IStyle'
import MyInput from 'components/MyInput'
import MySelect from 'components/MySelect'
import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import PageError from 'components/Shared/PageError'
import { genderTranslate } from 'utils/translateors'
import MyButtonError from 'components/Buttons/MyButtonError'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const AddStudentC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        title: {
            flex: '100%',
        },
        codeContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '50px',
        },
        studentCard: {
            padding: '30px 35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap-reverse',
            columnGap: '70px',
            rowGap: '30px',
            borderRadius: '20px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        dataContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '37px',
        },
        row: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap-reverse',
            columnGap: '35px',
            rowGap: '15px',
        },
        studentName: {
            padding: '10px 20px',
            borderRadius: '10px',
            border: `2px solid ${mainColors.paper.border}`,
            background: mainColors.linerGradient.primary,
            boxShadow: `0px 5px 15px 0px ${mainColors.secondary.main}`,
        },
        dataCard: {
            padding: '10px 15px',
            borderRadius: '5px',
            background: mainColors.backgroundColor.main,
            border: `1px solid ${mainColors.paper.border}`,
        },
        chipsContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '40px',
            rowGap: '20px',
            '@media screen and (max-width: 800px)': {
                gridTemplateColumns: '1fr',
            },
        },
        chip: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
        },
        infoChip: {
            padding: '10px 10px',
            borderRadius: '5px',
            background: mainColors.backgroundColor.main,
            border: `1px solid ${mainColors.paper.border}`,
        },
        photoContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        },
        photoPLaceholder: {
            width: '150px',
            height: '150px',
            background: () => {
                if (data.studentData.image) {
                    return `url(${Urls.URL_MAIN}/${data.studentData.image})`
                } else {
                    return '#B6D5F0'
                }
            },
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: '50',
            outline: `2px dashed ${mainColors.primary.main}`,
            borderRadius: '13px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        studentPersonalData: {
            padding: '45px 35px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '200px',
            rowGap: '30px',
            borderRadius: '20px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            gap: '30px',
        },
        bigChip: {
            display: 'grid',
            gridTemplateColumns: '120px 170px',
            alignItems: 'center',
            gap: '10px',
            '@media screen and (max-width: 500px)': {
                gridTemplateColumns: '170px',
            },
        },
        bigInfoChip: {
            textAlign: 'center',
            padding: '10px 8px',
            borderRadius: '5px',
            background: mainColors.backgroundColor.main,
            border: `1px solid ${mainColors.paper.border}`,
        },
        groupContainer: {
            padding: '35px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '50px',
            borderRadius: '15px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
            '@media screen and (max-width: 450px)': {
                padding: '25px 30px',
            },
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
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الكود الخاص بالطالب:-
            </Typography>
            <Box sx={style.codeContainer}>
                <MyInput
                    placeholder="أدخل كود الطالب"
                    value={states.studentCode.value}
                    error={states.studentCode.error}
                    onChange={actions.studentCodeHandler}
                    helperText={states.studentCode.helperText}
                />
                <Box sx={style.submitButton}>
                    <MyButton
                        loading={states.loading}
                        content="تأكيد"
                        onClick={actions.submitCode}
                    />
                </Box>
            </Box>
            {states.codeError.error && (
                <Typography sx={style.title} variant="h4" color={mainColors.error.main}>
                    {states.codeError.value}
                </Typography>
            )}
            {data.studentData && (
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    بطاقة الطالب التعريفية:-
                </Typography>
            )}
            {data.studentData && (
                <Box sx={style.studentCard}>
                    <Box sx={style.dataContainer}>
                        <Box sx={style.row}>
                            <Box sx={style.studentName}>
                                <Typography color={'primary'} variant={'h3'}>
                                    {data.studentData.gender == 'male' ? 'الطالب' : 'الطالبه'}
                                    {` / ${data.studentData.firstName} ${data.studentData.middleName} ${data.studentData.lastName}`}
                                </Typography>
                            </Box>
                            <Box sx={style.dataCard}>
                                <Typography color={'primary'} variant="h5" fontWeight={700}>
                                    {data.studentData.code}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.chipsContainer}>
                            <Box sx={style.chip}>
                                <Typography
                                    variant="h5"
                                    color={mainColors.title.main}
                                    fontWeight={700}
                                >
                                    الصف الدراسي:-
                                </Typography>
                                <Box sx={style.infoChip}>
                                    <Typography variant="h5" color={'primary'} fontWeight={700}>
                                        {data.studentData.levelName}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={style.chip}>
                                <Typography
                                    variant="h5"
                                    color={mainColors.title.main}
                                    fontWeight={700}
                                >
                                    أسم المستخدم:-
                                </Typography>
                                <Box sx={style.infoChip}>
                                    <Typography variant="h5" color={'primary'} fontWeight={700}>
                                        {data.studentData.userName}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={style.chip}>
                                <Typography
                                    variant="h5"
                                    color={mainColors.title.main}
                                    fontWeight={700}
                                >
                                    الشعبة العلمية:-
                                </Typography>
                                <Box sx={style.infoChip}>
                                    <Typography variant="h5" color={'primary'} fontWeight={700}>
                                        {data.studentData.educationClassificationName}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={style.chip}>
                                <Typography
                                    variant="h5"
                                    color={mainColors.title.main}
                                    fontWeight={700}
                                >
                                    البريد الإلكتروني:-
                                </Typography>
                                <Box sx={style.infoChip}>
                                    <Typography variant="h5" color={'primary'} fontWeight={700}>
                                        {data.studentData.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={style.photoContainer}>
                        <Box sx={style.photoPLaceholder} />
                        <Typography variant="h5" color={mainColors.title.main}>
                            صورة الطالب الشخصية
                        </Typography>
                    </Box>
                </Box>
            )}
            {data.studentData && (
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    بيانات الطالب الشخصية:-
                </Typography>
            )}
            {data.studentData && (
                <Box sx={style.studentPersonalData}>
                    <Box sx={style.column}>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                الاسم الاول:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.firstName}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                الاسم الاخير:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.lastName}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                الاسم الاوسط:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.middleName}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                الاسم بالكامل:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {`${data.studentData.firstName} ${data.studentData.middleName} ${data.studentData.lastName}`}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                النوع:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {genderTranslate(data.studentData.gender)}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                تاريخ الميلاد:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {new Date(data.studentData.birthDay).toLocaleDateString(
                                        'en-US',
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={style.column}>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                العنوان:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.address}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                رقم الهاتف:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.phone}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                الهاتف المنزلي:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.homePhone}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                أسم ولي الأمر:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.parentName}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                وظيفة ولي الأمر:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.parentJob}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={style.bigChip}>
                            <Typography variant="h5" color={mainColors.title.main} fontWeight={700}>
                                هاتف ولي الامر:-
                            </Typography>
                            <Box sx={style.bigInfoChip}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {data.studentData.parentPhone}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
            {data.studentData && (
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    تحديد مجموعة الطالب:-
                </Typography>
            )}
            {data.studentData && (
                <Box sx={style.groupContainer}>
                    <MySelect
                        data={data.years}
                        value={states.year.value}
                        error={states.year.error}
                        placeholder={'الأعوام الدراسيه'}
                        getSelected={actions.yearHandler}
                    />
                    <MySelect
                        data={data.groups}
                        placeholder={'المجموعات'}
                        error={states.group.error}
                        value={states.group.value}
                        getSelected={actions.groupHandler}
                        disabled={data.groups.length ? false : true}
                    />
                </Box>
            )}
            {data.studentData && (
                <Box sx={style.buttonsContainer}>
                    <PageError errors={states.pageError} />
                    <Box sx={style.submitButton}>
                        <MyButton
                            loading={states.loading}
                            content="تأكيد واضافة"
                            onClick={actions.submit}
                        />
                    </Box>
                    <Box sx={style.submitButton}>
                        <MyButtonError
                            loading={states.loading}
                            content="إلغاء العملية"
                            onClick={actions.cancelSubmit}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default AddStudentC
