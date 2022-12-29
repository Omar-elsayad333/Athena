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
            gap: '82px',
        },
        card: {
            width: '250px',
            maxWidth: '100%',
            height: '250px',
            mineHight: '250px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'start',
            gap: '35px',
            border: mainColors.studentCard.border,
            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/athena-95dab.appspot.com/o/student.jpg?alt=media&token=14df73ef-8e83-4ea3-9dc7-4b4fa325995b")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.35s',
            ':hover': {
                border: mainColors.studentCard.hover,
            },
            '@media(max-width: 400px)': {
                gap: '25px',
                padding: '10px',
            },
        },
        content: {
            width: '100%', 
            minHeight: '66px',
            padding: '10px 15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            background: 'rgba(63, 114, 164, 0.6)',
            border: '2px solid #3F72A4',
            borderRadius: '12px',
        },
        details: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
        }
    }

    return (
        <Box sx={classes.container}>
            {
                data.map((item:any) => {
                    return (
                        <Link key={item.id} href={`/teacher/students/student/${item.id}`}>
                            <Box sx={classes.card}>
                                <Box sx={classes.content}>
                                    <Typography textAlign={'center'} color='secondary' variant="h4">
                                        {item.name}
                                    </Typography>
                                    <Box sx={classes.details}>
                                        <Typography color='secondary' variant="h6">
                                            {item.level}
                                        </Typography>
                                        <Typography color='secondary' variant="h6">
                                            {item.group}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    )
                })
            }
        </Box>
    );
}
 
export default StudentCard;