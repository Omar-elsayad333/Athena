
// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const GroupCard: React.FC<Props> = ({data}) => {

    const classes = {
        container: {
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            width: '370px',
            height: '243px',
            paddingX: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '35px',
            border: '2px solid #3F72A4',
            background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.35s',
            ':hover': {
                boxShadow: '0px 0px 15px 0px #1C364F40',
            },
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        span: {
            fontWeight: '700',
        },
    }

    return (
        <Box sx={classes.container}>
            {
                data.map((item:any, index:number) => {
                    return (
                        <Box sx={classes.card} key={index}>
                            <Box sx={classes.content}>
                                <Typography color='primary' variant="h1">
                                    {item.name}
                                </Typography>
                                <Typography color='primary' variant="h5">
                                    <span style={classes.span}>
                                        الصف الدراسي :
                                    </span>
                                    {` ${item.level}`}
                                </Typography>
                            </Box>
                            <Box sx={classes.content}>
                                <Typography color='primary' variant="h4">
                                    <span style={classes.span}>
                                        عدد الطلاب :
                                    </span>
                                    {` ${item.studentCount}`}
                                </Typography>
                                <Typography color='primary' variant="h4">
                                    <span style={classes.span}>
                                        المقر :
                                    </span>
                                    {` ${item.location}`}
                                </Typography>   
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    );
}
 
export default GroupCard;