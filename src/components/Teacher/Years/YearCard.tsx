import Link from "next/link";
import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const YearCard: React.FC<Props> = ({data}) => {

    const {mainColors} = useContext(DarkThemeContext);

    const classes = {
        container: {
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            width: '335px',
            maxWidth: '100%',
            height: '149px',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '35px',
            border: '2px solid #3F72A4',
            background: mainColors.linerGradient.primary,
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.35s',
            ':hover': {
                boxShadow: '0px 0px 15px 0px rgba(63, 114, 164, .50)',
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
                        <Link key={item.id} href={`/teacher/years/year/${item.id}`}>
                            <Box sx={classes.card}>
                                <Box sx={classes.content}>
                                    <Typography color='primary' variant="h4" fontWeight={700}> 
                                        العام الدراسي
                                    </Typography>
                                    <Typography color='primary' variant="h1">
                                        {`${item.period.end.slice(0, 4)} / ${item.period.start.slice(0, 4)}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                })
            }
        </Box>
    );
}
 
export default YearCard;