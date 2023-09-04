import { IStyle } from 'styles/IStyle'
// import FilterWedgit from '../../../FilterWedgit'
import { useTheme } from 'context/ThemeContext'
import MySearchInput from 'components/MySearchInput'
import MyButtonError from 'components/Buttons/MyButtonError'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

type Props = {
    data?: any
    states?: any
    actions?: any
}

const JoinRequestsC: React.FC<Props> = ({ data, states, actions }) => {
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
        card: {
            maxWidth: '700px',
            border: `1px solid #B6D5F0`,
            display: 'flex',
            borderRadius: '11px',
            flexDirection: 'row',
            justifyContent: 'start',
            gap: '40px',
        },
        img: {
            height: '100px',
            width: '100px',
            borderRadius: '0px 11px 11px 0px',
        },
        textLoader: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px ',
            textAlign: 'center',
            gap: '15px',
        },
        smallText: {
            color: mainColors.primary.main,
            flexDirection: 'column',
        },
        action:{
            dispaly:"flex",
            flexDirection:"column"
        },
        button:{
            border:"3px solid "
            ,fontWeight:"bold"
        }
    }

    return (
        <Box sx={style.container}>
            <MySearchInput placeholder="هل تبحث عن طالب معين ؟" onChange={actions.searchHandler} />

            {/* <Box sx={style.controles}>
                {/* <FilterWedgit
                        selected={states.selectedLevel}
                        filters={states.isPreOpenYear ? data.preopenLevels : data.openLevels}
                        allFilter="جميع الطلاب"
                        getSelected={actions.selectedLevelHandler}
                    /> }
                    
            </Box> */}
            {/* card Div*/}
            <Box sx={style.card}>
                <Box
                    sx={[
                        style.img,
                        {
                            backgroundImage:
                                'url(https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg)',
                        },
                    ]}
                ></Box>
                <Box sx={style.textLoader}>
                    <Typography variant="h2" color={mainColors.primary.main}>
                        الطالب / مروان محمد عبد العزيز
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography variant="h5" sx={style.smallText}>
                            الطالب / مروان محمد عبد العزيز
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={[style.smallText, { marginRight: '10px' }]}
                            mr="2"
                        >
                            العام الدراسي الحالي
                        </Typography>
                    </Box>
                    <Box sx={style.action}>
                    <Button variant="outlined" sx={style.button}><Typography variant='h4'>مراجعه </Typography> </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default JoinRequestsC
