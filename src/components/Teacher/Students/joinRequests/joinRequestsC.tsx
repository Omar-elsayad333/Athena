import { IStyle } from 'styles/IStyle'
import FilterWedgit from '../../../FilterWedgit'
import { useTheme } from 'context/ThemeContext'
import MySearchInput from 'components/MySearchInput'
import JoinRequestsCancelDialog from 'components/Dialogs/joinRequestsCancelDialog'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

type Props = {
    data?: any
    states?: any
    actions?: any
    dialogs?: any
}

const JoinRequestsC: React.FC<Props> = ({ data, states, actions, dialogs }) => {
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
            maxWidth: '800px',
            border: `1px solid #B6D5F0`,
            display: 'flex',
            borderRadius: '11px',
            flexDirection: 'row',
            justifyContent: 'start',
            paddingLeft: '35px',
            flexWrap: 'wrap',
            gap: '40px',
            '@media(max-width:450px)': {
                flexDirection: 'colunm',
                gap: '10px',
                justifyContent: 'center',
                paddingLeft: '0px',
            },
        },
        img: {
            height: '100px',
            width: '100px',
            borderRadius: '0px 11px 11px 0px',
            objectFit: 'cover',
            '@media(max-width:450px)': {
                height: '200px',
                width: '100%',
                borderRadius: '11px 11px 0px 0px',
                objectFit: 'cover',
            },
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
        actions: {
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            marginRight: 'auto',
            '@media(max-width:450px)': {
                marginRight: '0px',
            },
        },
        button: {
            border: '3px solid ',
            fontWeight: 'bold',
        },
    }

    return (
        <Box sx={style.container}>
            <MySearchInput placeholder="هل تبحث عن طالب معين ؟" onChange={actions.searchHandler} />

            <Box sx={style.controles}>
                <FilterWedgit
                    selected={states.selectedLevel}
                    filters={data.levelsToSelect}
                    allFilter="جميع الطلاب"
                    getSelected={actions.selectedLevelSwitch}
                />
            </Box>
            {/* card Div*/}

            {data.filterdData[0]?.students.map((request: any) => (
                <Box sx={style.card} key={request.id}> 
                    <Box
                        sx={[
                            { ...style.img },
                            {
                                backgroundImage: `url(${request.image})`,
                            },
                        ]}
                    ></Box>
                    <Box sx={style.textLoader}>
                        <Typography variant="h2" color={mainColors.primary.main}>
                            الطالب/{request.name}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="h5" sx={style.smallText}>
                                المجموعة :{request.groupName}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={[{ ...style.smallText }, { marginRight: '10px' }]}
                                mr="2"
                            >
                                {request.yearState}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={style.actions}>
                        <Button variant="outlined" sx={style.button}>
                            <Typography variant="h4">مراجعه </Typography>
                        </Button>
                        <Box mr={4}>
                        <Typography variant="h4"  onClick={()=>actions.openWarningDialogState(request.id)}>
                        </Typography>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                            >
                                <path
                                    opacity="0.2"
                                    d="M32.6798 4H15.3398C8.55976 4 3.99976 8.76 3.99976 15.84V32.18C3.99976 39.24 8.55976 44 15.3398 44H32.6798C39.4598 44 43.9998 39.24 43.9998 32.18V15.84C43.9998 8.76 39.4598 4 32.6798 4Z"
                                    fill="#AE0000"
                                />
                                <path
                                    d="M30.0312 27.541L26.4732 23.985L30.0292 20.429C30.7132 19.747 30.7132 18.637 30.0292 17.955C29.3452 17.267 28.2392 17.269 27.5552 17.953L23.9972 21.509L20.4392 17.949C19.7552 17.265 18.6472 17.269 17.9632 17.949C17.2812 18.633 17.2812 19.743 17.9632 20.425L21.5232 23.985L17.9712 27.535C17.2872 28.219 17.2872 29.329 17.9712 30.009C18.3132 30.353 18.7592 30.523 19.2072 30.523C19.6572 30.523 20.1032 30.353 20.4452 30.011L23.9972 26.459L27.5572 30.017C27.8992 30.359 28.3452 30.529 28.7932 30.529C29.2412 30.529 29.6892 30.357 30.0312 30.017C30.7152 29.333 30.7152 28.225 30.0312 27.541Z"
                                    fill="#AE0000"
                                />
                            </svg>
                        </Box>
                    </Box>
                    <JoinRequestsCancelDialog
                        state={dialogs.warningDialog.state}
                        content={dialogs.warningDialog.content}
                        actions={dialogs.warningDialog.actions}
                        id={request.id}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default JoinRequestsC
