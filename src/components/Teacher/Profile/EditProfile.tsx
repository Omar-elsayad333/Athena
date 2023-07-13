import Urls from 'constant/urls'
import MyInput from 'components/MyInput'
import MyAvatar from 'components/MyAvatar'
import MyTextArea from 'components/MyTextArea'
import { useTheme } from 'context/ThemeContext'
import MyUploadFile from 'components/MyUploadFile'
import MyButton from 'components/Buttons/MyButton'
import MyDatePicker from 'components/MyDatePicker'
import MyButtonError from 'components/Buttons/MyButtonError'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const EditProfileC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors, darkMode } = useTheme()

    const style = {
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '55px',
        },
        row: {
            gap: '59px',
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
        },
        column: {
            gap: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexWrap: 'wrap',
        },
        teacherImage: {
            borderRadius: '20px',
            border: `2px solid ${mainColors.primary.main} !important`,
        },
        card: {
            boxShadow: darkMode ? 'none' : '0px 0px 15px 0px #B6D5F0',
            padding: '27px 29px',
            backgroundColor: mainColors.paper.main,
            borderRadius: '12px',
            border: `2px solid ${mainColors.paper.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '27px',
            width: 'fit-content',
        },
        line: {
            width: '100%',
            border: `1px solid ${mainColors.primary.main}`,
        },
        cardTitle: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
        },
        cardBody: {
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '24px',
        },
        cardItem: {
            flex: '40%',
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: 'fit-content',
        },
        fullCardItem: {
            flex: '100%',
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: 'fit-content',
        },
        icons: {
            display: 'flex',
            flexWarp: 'warp',
            gap: '10px',
            alignItems: 'start',
            justifyContent: 'center',
        },
        coverButton: {
            padding: '5px 40px',
            borderRadius: '5px',
        },
        coverBox: {
            width: '504px',
            height: '170px',
            maxWidth: '504px',
            display: 'flex',
            borderRadius: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: darkMode ? null : '0px 0px 15px 0px #B6D5F0',
        },
        rowCard: {
            boxShadow: darkMode ? 'none' : '0px 0px 15px 0px #B6D5F0',
            padding: '27px 29px',
            backgroundColor: mainColors.paper.main,
            borderRadius: '12px',
            border: `2px solid ${mainColors.paper.border}`,
            display: 'flex',
            gap: '30px',
            flexFlow: 'row wrap',
            boxSizing: 'border-box',
        },
        InputStyle: {
            gap: '20px',
            display: 'flex',
            flex: '0 0 30%',
            flexDirection: 'column',
        },
        rowInputStyle: {
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        },
        buttonsContainer: {
            marginTop: '30px',
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
            <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                هوية المدرس الشخصية :-
            </Typography>
            {data ? (
                <>
                    <Box sx={style.card}>
                        <Box sx={style.cardTitle}>
                            <MyAvatar
                                width="140"
                                height="140"
                                alt={data.firstName + data.lastName}
                                src={
                                    states.state.imageInputs.profileImage.data ||
                                    `${Urls.URL_MAIN}/${data.image}`
                                }
                            />
                            <Box sx={style.column}>
                                <Typography variant="h3" color={'primary'}>
                                    {'الصورة الشخصية:- '}
                                </Typography>
                                <MyUploadFile
                                    name="profileImage"
                                    content="تعديل"
                                    valueSetter={actions.handleImageInput}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={style.card}>
                        <Box sx={style.cardTitle}>
                            <Box sx={style.column}>
                                <Typography variant="h3" color={'primary'}>
                                    صورة رأس الملف الشخصي:-
                                </Typography>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        maxWidth={280}
                                        color={mainColors.title.main}
                                    >
                                        تظهر صورة رأس الملف في الصفحة الشخصية بالمدرس الموجودة داخل
                                        البوابة الخاصة بالطالب{' '}
                                    </Typography>
                                    <Typography variant="h6" color={mainColors.title.main}>
                                        ينصح بشدة تحميل صور مقاس 1512*510 px
                                    </Typography>
                                </Box>
                            </Box>
                            {data && (
                                <Box
                                    sx={[
                                        style.coverBox,
                                        {
                                            backgroundImage: states.state.imageInputs.coverImage
                                                .data
                                                ? `url(${states.state.imageInputs.coverImage.data})`
                                                : `url(${Urls.URL_MAIN}/${data.coverImage})`,
                                        },
                                    ]}
                                >
                                    <Button
                                        component="label"
                                        variant="outlined"
                                        sx={style.coverButton}
                                        color={'primary'}
                                    >
                                        <input
                                            hidden
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            onChange={(e) =>
                                                actions.handleImageInput(
                                                    e.target.files,
                                                    'coverImage',
                                                )
                                            }
                                        />
                                        <Typography fontWeight={700} variant="h4">
                                            تحميل
                                        </Typography>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                        هوية المدرس الشخصية :-
                    </Typography>
                    <Typography variant="h5" fontWeight={700} color={'primary'}>
                        رجاءً إملئ هذا الحقل جيداً:-
                    </Typography>
                    <MyTextArea
                        name={'summary'}
                        max={1000}
                        onChange={actions.handleInput}
                        value={states.state.inputs.summary.value || data.summary}
                        helperText={states.state.inputs.summary.helperText}
                    />
                    <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                        البيانات الشخصية والتعليمية:-
                    </Typography>
                    <Box sx={style.rowCard}>
                        <Box sx={style.InputStyle}>
                            <Typography variant="h5" fontWeight={400} color={mainColors.title.main}>
                                الأسم الأول
                            </Typography>
                            <MyInput
                                name="firstName"
                                placeholder={data.firstName}
                                onChange={actions.handleInput}
                                value={states.state.inputs.firstName.value}
                                helperText={states.state.inputs.firstName.helperText}
                            />
                        </Box>
                        <Box sx={style.InputStyle}>
                            <Typography variant="h5" fontWeight={400} color={mainColors.title.main}>
                                الأسم الأخير
                            </Typography>
                            <MyInput
                                name="lastName"
                                placeholder={data.lastName}
                                onChange={actions.handleInput}
                                value={states.state.inputs.lastName.value}
                                helperText={states.state.inputs.lastName.helperText}
                            />
                        </Box>
                        <Box sx={style.InputStyle}>
                            <Typography variant="h5" fontWeight={400} color={mainColors.title.main}>
                                تاريخ الميلاد
                            </Typography>
                            <MyDatePicker
                                name="birthDay"
                                placeholder={data.birthDay}
                                handleDateValue={actions.handleDateInput}
                                helperText={states.state.dateInputs.birthDay.helperText}
                                dateValue={
                                    states.state.dateInputs.birthDay.value
                                        ? states.state.dateInputs.birthDay.value
                                        : data.birthDay
                                }
                            />
                        </Box>
                        <Box sx={style.InputStyle}>
                            <Typography variant="h5" fontWeight={400} color={mainColors.title.main}>
                                الجنسية
                            </Typography>
                            <MyInput
                                name="nationality"
                                placeholder={data.nationality}
                                onChange={actions.handleInput}
                                value={states.state.inputs.nationality.value}
                                helperText={states.state.inputs.nationality.helperText}
                            />
                        </Box>
                        <Box sx={style.InputStyle}>
                            <Typography variant="h5" fontWeight={400} color={mainColors.title.main}>
                                الدرجة العلمية
                            </Typography>
                            <MyInput
                                name="degree"
                                placeholder={data.degree}
                                onChange={actions.handleInput}
                                value={states.state.inputs.degree.value}
                                helperText={states.state.inputs.degree.helperText}
                            />
                        </Box>
                        <Box sx={style.InputStyle}>
                            <Box sx={{ display: 'flex', gap: '5px' }}>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    المدرسه
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight={300}
                                    color={mainColors.title.main}
                                >
                                    وظيفة حكومية*
                                </Typography>
                            </Box>
                            <MyInput
                                name="school"
                                placeholder={data.school}
                                onChange={actions.handleInput}
                                value={states.state.inputs.school.value}
                                helperText={states.state.inputs.school.helperText}
                            />
                        </Box>
                        <Box sx={style.InputStyle}>
                            <Typography variant="h5" fontWeight={400} color={mainColors.title.main}>
                                طرق التدريس
                            </Typography>
                            <MyInput
                                name="teachingMethod"
                                placeholder={data.teachingMethod}
                                onChange={actions.handleInput}
                                value={states.state.inputs.teachingMethod.value}
                                helperText={states.state.inputs.teachingMethod.helperText}
                            />
                        </Box>
                    </Box>
                    <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                        البيانات الشخصية والتعليمية:-
                    </Typography>
                    <Box sx={style.card}>
                        <Box sx={style.rowInputStyle}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="material-symbols:phone-enabled-sharp">
                                        <path
                                            id="Vector"
                                            d="M3.375 17.5C3.23611 17.5 3.09028 17.4964 2.9375 17.4892C2.78472 17.4819 2.63889 17.4717 2.5 17.4583V12.5833L6.66667 11.75L9.08333 14.1667C10.1389 13.5278 11.1078 12.7708 11.99 11.8958C12.8722 11.0208 13.6047 10.0833 14.1875 9.08333L11.8125 6.6875L12.5833 2.5H17.4583C17.4861 2.63889 17.5 2.78472 17.5 2.9375V3.375C17.5 5.16667 17.1008 6.91333 16.3025 8.615C15.5042 10.3167 14.4486 11.8269 13.1358 13.1458C11.8231 14.4653 10.3161 15.5208 8.615 16.3125C6.91389 17.1042 5.16722 17.5 3.375 17.5Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    الهاتف المحمول
                                </Typography>
                            </Box>
                            <MyInput
                                name="phone"
                                placeholder={data.phone}
                                onChange={actions.handleInput}
                                value={states.state.inputs.phone.value}
                                helperText={states.state.inputs.phone.helperText}
                            />
                        </Box>
                        <Box sx={[style.rowInputStyle, { marginBottom: '75px' }]}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="material-symbols:phone-enabled-sharp">
                                        <path
                                            id="Vector"
                                            d="M3.375 17.5C3.23611 17.5 3.09028 17.4964 2.9375 17.4892C2.78472 17.4819 2.63889 17.4717 2.5 17.4583V12.5833L6.66667 11.75L9.08333 14.1667C10.1389 13.5278 11.1078 12.7708 11.99 11.8958C12.8722 11.0208 13.6047 10.0833 14.1875 9.08333L11.8125 6.6875L12.5833 2.5H17.4583C17.4861 2.63889 17.5 2.78472 17.5 2.9375V3.375C17.5 5.16667 17.1008 6.91333 16.3025 8.615C15.5042 10.3167 14.4486 11.8269 13.1358 13.1458C11.8231 14.4653 10.3161 15.5208 8.615 16.3125C6.91389 17.1042 5.16722 17.5 3.375 17.5Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    البريد الالكتروني
                                </Typography>
                            </Box>
                            <MyInput
                                name="email"
                                placeholder={data.email}
                                onChange={actions.handleInput}
                                value={states.state.inputs.email.value}
                                helperText={states.state.inputs.email.helperText}
                            />
                        </Box>
                        <Box sx={style.rowInputStyle}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="material-symbols:phone-enabled-sharp">
                                        <path
                                            id="Vector"
                                            d="M3.375 17.5C3.23611 17.5 3.09028 17.4964 2.9375 17.4892C2.78472 17.4819 2.63889 17.4717 2.5 17.4583V12.5833L6.66667 11.75L9.08333 14.1667C10.1389 13.5278 11.1078 12.7708 11.99 11.8958C12.8722 11.0208 13.6047 10.0833 14.1875 9.08333L11.8125 6.6875L12.5833 2.5H17.4583C17.4861 2.63889 17.5 2.78472 17.5 2.9375V3.375C17.5 5.16667 17.1008 6.91333 16.3025 8.615C15.5042 10.3167 14.4486 11.8269 13.1358 13.1458C11.8231 14.4653 10.3161 15.5208 8.615 16.3125C6.91389 17.1042 5.16722 17.5 3.375 17.5Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    الموقع الالكتروني
                                </Typography>
                            </Box>
                            <MyInput
                                name="webSite"
                                placeholder={data.webSite || 'لا يوجد'}
                                onChange={actions.handleInput}
                                value={states.state.inputs.webSite.value}
                                helperText={states.state.inputs.webSite.helperText}
                            />
                        </Box>
                        <Box sx={style.rowInputStyle}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="material-symbols:phone-enabled-sharp">
                                        <path
                                            id="Vector"
                                            d="M3.375 17.5C3.23611 17.5 3.09028 17.4964 2.9375 17.4892C2.78472 17.4819 2.63889 17.4717 2.5 17.4583V12.5833L6.66667 11.75L9.08333 14.1667C10.1389 13.5278 11.1078 12.7708 11.99 11.8958C12.8722 11.0208 13.6047 10.0833 14.1875 9.08333L11.8125 6.6875L12.5833 2.5H17.4583C17.4861 2.63889 17.5 2.78472 17.5 2.9375V3.375C17.5 5.16667 17.1008 6.91333 16.3025 8.615C15.5042 10.3167 14.4486 11.8269 13.1358 13.1458C11.8231 14.4653 10.3161 15.5208 8.615 16.3125C6.91389 17.1042 5.16722 17.5 3.375 17.5Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    رابط الفيسبوك
                                </Typography>
                            </Box>
                            <MyInput
                                name="facebook"
                                placeholder={data.facebook || 'لا يوجد'}
                                onChange={actions.handleInput}
                                value={states.state.inputs.facebook.value}
                                helperText={states.state.inputs.facebook.helperText}
                            />
                        </Box>
                        <Box sx={style.rowInputStyle}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="material-symbols:phone-enabled-sharp">
                                        <path
                                            id="Vector"
                                            d="M3.375 17.5C3.23611 17.5 3.09028 17.4964 2.9375 17.4892C2.78472 17.4819 2.63889 17.4717 2.5 17.4583V12.5833L6.66667 11.75L9.08333 14.1667C10.1389 13.5278 11.1078 12.7708 11.99 11.8958C12.8722 11.0208 13.6047 10.0833 14.1875 9.08333L11.8125 6.6875L12.5833 2.5H17.4583C17.4861 2.63889 17.5 2.78472 17.5 2.9375V3.375C17.5 5.16667 17.1008 6.91333 16.3025 8.615C15.5042 10.3167 14.4486 11.8269 13.1358 13.1458C11.8231 14.4653 10.3161 15.5208 8.615 16.3125C6.91389 17.1042 5.16722 17.5 3.375 17.5Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    رابط تويتر
                                </Typography>
                            </Box>
                            <MyInput
                                name="twitter"
                                placeholder={data.twitter || 'لا يوجد'}
                                onChange={actions.handleInput}
                                value={states.state.inputs.twitter.value}
                                helperText={states.state.inputs.twitter.helperText}
                            />
                        </Box>
                        <Box sx={style.rowInputStyle}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="material-symbols:phone-enabled-sharp">
                                        <path
                                            id="Vector"
                                            d="M3.375 17.5C3.23611 17.5 3.09028 17.4964 2.9375 17.4892C2.78472 17.4819 2.63889 17.4717 2.5 17.4583V12.5833L6.66667 11.75L9.08333 14.1667C10.1389 13.5278 11.1078 12.7708 11.99 11.8958C12.8722 11.0208 13.6047 10.0833 14.1875 9.08333L11.8125 6.6875L12.5833 2.5H17.4583C17.4861 2.63889 17.5 2.78472 17.5 2.9375V3.375C17.5 5.16667 17.1008 6.91333 16.3025 8.615C15.5042 10.3167 14.4486 11.8269 13.1358 13.1458C11.8231 14.4653 10.3161 15.5208 8.615 16.3125C6.91389 17.1042 5.16722 17.5 3.375 17.5Z"
                                            fill="inherit"
                                        />
                                    </g>
                                </svg>
                                <Typography
                                    variant="h5"
                                    fontWeight={400}
                                    color={mainColors.title.main}
                                >
                                    قناة اليوتيوب
                                </Typography>
                            </Box>
                            <MyInput
                                name="youtube"
                                placeholder={data.youtube || 'لا يوجد'}
                                onChange={actions.handleInput}
                                value={states.state.inputs.youtube.value}
                                helperText={states.state.inputs.youtube.helperText}
                            />
                        </Box>
                    </Box>
                    <Box sx={style.buttonsContainer}>
                        <Box sx={style.submitButton}>
                            <MyButton
                                content="حفظ التعديلات"
                                loading={states.loading}
                                onClick={actions.submit}
                            />
                        </Box>
                        <Box sx={style.submitButton}>
                            <MyButtonError
                                content="إلغاء العملية"
                                loading={states.loading}
                                onClick={actions.cancelAction}
                            />
                        </Box>
                    </Box>
                </>
            ) : (
                <Typography variant="h2" color={'primary'}>
                    لا يوجد بيانات
                </Typography>
            )}
        </Box>
    )
}

export default EditProfileC
