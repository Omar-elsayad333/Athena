import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import MyInputSmall from 'components/MyInputSmall'
import MyButtonError from 'components/Buttons/MyButtonError'
import MyButtonSuccess from 'components/Buttons/MyButtonSuccess'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    actions: any
    grandParentIndex: any
    parentIndex: any
}

const ShowWritten: React.FC<Props> = ({ data, actions, grandParentIndex, parentIndex }) => {
    const { mainColors } = useTheme()
    const style = {
        flexColumn: {
            width: '580px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '34px',
        },
        flexRow: {
            width: '580px',
            flexWrap: 'wrap',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '34px',
        },
        choicesContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '32px',
            rowGap: '5px',
        },
        paragraphContainer: {
            maxWidth: '100%',
            width: '580px',
            borderRadius: '10px',
            padding: '19px 25px',
            border: `2px solid ${mainColors.paper.border}`,
            backgroundColor: mainColors.backgroundColor.main,
        },
        showAnswerBtn: {
            padding: '4px 10px',
            display: 'flex',
            cursor: 'pointer',
            borderRadius: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mainColors.success.main,
        },
        container: {
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center',
        },
    }

    return (
        <Box sx={style.flexColumn}>
            <Box sx={style.flexRow}>
                <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                    الاجابة الصحيحة (التقريبية):-
                </Typography>
                {!data.showAnswer && (
                    <Box
                        sx={style.showAnswerBtn}
                        onClick={() =>
                            actions.showAndHideAnswerHandler({
                                grandParent: grandParentIndex,
                                parent: parentIndex,
                            })
                        }
                    >
                        <Typography variant="h5" color={'#E8F3FF'} fontWeight={700}>
                            اجابة السؤال التقريبية
                        </Typography>
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            style={{ rotate: '270deg' }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.69796 10.0423C6.69758 9.84668 6.7657 9.65714 6.89049 9.50654L11.0759 4.48404C11.218 4.31309 11.4222 4.20559 11.6435 4.18518C11.8649 4.16477 12.0852 4.23313 12.2562 4.37522C12.4271 4.5173 12.5346 4.72148 12.5551 4.94282C12.5755 5.16417 12.5071 5.38456 12.365 5.55551L8.61488 10.0423L12.2311 14.529C12.3006 14.6147 12.3525 14.7132 12.3839 14.8189C12.4152 14.9247 12.4253 15.0356 12.4137 15.1453C12.402 15.255 12.3688 15.3613 12.3159 15.4581C12.263 15.5549 12.1915 15.6402 12.1055 15.7093C12.0195 15.786 11.9185 15.844 11.8089 15.8799C11.6994 15.9157 11.5836 15.9285 11.4689 15.9175C11.3541 15.9065 11.2429 15.8719 11.1422 15.8159C11.0414 15.7599 10.9533 15.6838 10.8834 15.5921L6.84027 10.5696C6.7352 10.4147 6.6851 10.229 6.69796 10.0423Z"
                                fill="#E8F3FF"
                            />
                        </svg>
                    </Box>
                )}
            </Box>
            <Box sx={style.container}>
                <Box sx={style.paragraphContainer}>
                    <Typography variant="h4" fontWeight={700} color={'primary'}>
                        {data.studentAnswer ? data.studentAnswer : 'لا يوجد اجابه'}
                    </Typography>
                </Box>
                {data.showAnswer && (
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ rotate: '270deg' }}
                        onClick={() =>
                            actions.showAndHideAnswerHandler({
                                grandParent: grandParentIndex,
                                parent: parentIndex,
                            })
                        }
                    >
                        <path
                            d="M26.0595 19.544C26.0603 19.9245 25.9277 20.2933 25.6849 20.5864L17.5412 30.3589C17.2647 30.6915 16.8674 30.9007 16.4368 30.9404C16.0061 30.9801 15.5773 30.8471 15.2446 30.5706C14.912 30.2942 14.7029 29.8969 14.6631 29.4662C14.6234 29.0355 14.7564 28.6067 15.0329 28.2741L22.3297 19.544L15.2935 10.8139C15.1582 10.6473 15.0572 10.4556 14.9962 10.2498C14.9352 10.044 14.9155 9.82823 14.9382 9.61482C14.961 9.40141 15.0256 9.19459 15.1285 9.00624C15.2314 8.8179 15.3705 8.65175 15.5378 8.51734C15.7053 8.36818 15.9018 8.25521 16.1149 8.18551C16.3281 8.11581 16.5533 8.09089 16.7766 8.1123C16.9998 8.1337 17.2162 8.20098 17.4123 8.30991C17.6083 8.41885 17.7797 8.5671 17.9158 8.74537L25.7827 18.5179C25.9871 18.8193 26.0846 19.1806 26.0595 19.544Z"
                            fill="#3F72A4"
                        />
                    </svg>
                )}
                {data.showAnswer && (
                    <Box sx={style.paragraphContainer}>
                        <Typography variant="h4" fontWeight={700} color={'primary'}>
                            {data.answer ? data.answer : 'لا يوجد اجابه تقريبية'}
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box sx={[style.flexRow, { justifyContent: 'start' }]}>
                <MyButtonSuccess
                    onClick={() => actions.submitCorrectingDegree(data.id, data.degree)}
                    content="اجابة صحيحة"
                />
                <MyButtonError
                    onClick={() => actions.submitCorrectingDegree(data.id, '0')}
                    content="اجابة خاطئة"
                />
            </Box>
            <Box sx={[style.flexRow, { justifyContent: 'start' }]}>
                <MyInputSmall
                    type="number"
                    placeholder="حدد الدرجة التقديرية"
                    onChange={actions.handleCorrectingDegree}
                    indexes={{
                        grandParent: grandParentIndex,
                        parent: parentIndex,
                    }}
                    value={
                        data.correctingDegree
                            ? data.correctingDegree
                            : data.isCorrected
                            ? data.studentDegree
                            : ''
                    }
                />
                <MyButton
                    onClick={() => actions.submitCorrectingDegree(data.id, '0')}
                    content="تأكيد الدرجه"
                />
            </Box>
        </Box>
    )
}

export default ShowWritten
