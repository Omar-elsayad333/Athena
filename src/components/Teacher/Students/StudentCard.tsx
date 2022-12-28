import Link from "next/link";
import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const StudentCard: React.FC<Props> = ({data}) => {

    const {mainColors} = useContext(DarkThemeContext);

    const classes = {
        container: {
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            width: '250px',
            maxWidth: '100%',
            mineHight: '250px',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '35px',
            border: mainColors.studentCard.border,
            background: mainColors.linerGradient.primary,
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.35s',
            ':hover': {
                border: mainColors.studentCard.hover,
            },
            '@media(max-width: 400px)': {
                gap: '25px',
                padding: '40px 20px',
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
                data.map((item:any) => {
                    return (
                        <Link key={item.id} href={`/teacher/students/students/${item.id}`}>
                            <a>
                                <Box sx={classes.card}>
                                    <Box sx={classes.content}>
                                        <Typography color='primary' variant="h1">
                                            {item.name}
                                        </Typography>
                                        <Typography color='primary' variant="h5">
                                            <span style={classes.span}>
                                                العنوان :
                                            </span>
                                            {` ${item.location}`}
                                        </Typography>
                                    </Box>
                                    <Box sx={classes.content}>
                                        <Typography color='primary' variant="h5">
                                            <span style={classes.span}>
                                                الموظفين :
                                            </span>
                                            {` ${item.employees}`}
                                        </Typography>
                                        <Typography color='primary' variant="h5">
                                            <span style={classes.span}>
                                                رقم التليفون :
                                            </span>
                                            {` ${item.phoneNumber}`}
                                        </Typography>   
                                    </Box>
                                </Box>
                            </a>
                        </Link>
                    )
                })
            }
        </Box>
    );
}
 
export default StudentCard;