import Image from "next/image";
import useThemeSwitcher from "container/useThemeSwitcher";

// MUI
import { Box } from "@mui/material";

const ThemeSwitcher = () => {

    const {handleSwitch} = useThemeSwitcher();

    const classes = {
        root: {
            position: 'fixed',  
            bottom: 50,
            left: 50,
            zIndex: 50,
            '@media(max-width: 600px)': {
                bottom: 20,
                left: 20,
            },
        },
        container: {
            width: 90,
            height: 40,
            paddingX: '5px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '20px',
            transition: '.5s',
        },
        switcher: {
            width: 30,
            height: 30,
            position: 'absolute',
            zIndex: '5',
            borderRadius: '50%',
            transition: '.5s',
        },
        icon: {
            width: 30,
            height: 30, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    return (
        <Box sx={classes.root}>
            <Box sx={classes.container} id='container' onClick={() => handleSwitch()}>
                <Box sx={classes.switcher} id='switcher'>
                </Box>
                <Box sx={classes.icon}>
                    <Image src='/images/day-icon.svg' width={25} height={25} alt='night' />
                </Box>
                <Box sx={classes.icon}>
                    <Image src='/images/night-icon.svg' width={25} height={25} alt='night' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default ThemeSwitcher;