import { useTheme } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    value: any;
    error: boolean;
    helperText: string;
    changeHandler: Function;
}

const MyPhotoInput: React.FC<Props> = ({changeHandler, value, helperText, error}) => {

    const { mainColors } = useTheme()
    const style: any = {
        container: {
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        },
        invisiableInput: {
            width: '150px',
            height: '150px',
            opacity: 0,
            position: 'absolute',
            cursor: 'pointer',
        },
        photoPLaceholder: {
            width: '150px',
            height: '150px',
            background: () => {
                if(value){
                    return(`url(${value})`)
                }else {
                    return '#B6D5F0'
                }
            },
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: '99',
            outline: error ? `2px solid ${mainColors.error.main}` : '2px dashed #1C364F',
            borderRadius: '13px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    };
    const errorStyle = {
        root: {
            marginTop: '10px',
            fontSize: '14px', 
            color: mainColors.error.main,
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.photoPLaceholder}>
                {
                    !value &&
                    <svg width="100" height="100" viewBox="0 0 100 100" fill='#1C364F' xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_328_1250)">
                            <path d="M73.8932 39.0484C73.8942 43.775 72.4935 48.3958 69.8682 52.3262C67.2429 56.2567 63.5109 59.3203 59.1443 61.1296C54.7777 62.9388 49.9727 63.4125 45.3368 62.4906C40.701 61.5688 36.4427 59.2928 33.1005 55.9506C29.7583 52.6084 27.4823 48.3501 26.5605 43.7143C25.6386 39.0785 26.1123 34.2734 27.9216 29.9068C29.7308 25.5402 32.7944 21.8082 36.7249 19.1829C40.6554 16.5576 45.2761 15.1569 50.0027 15.158C56.3384 15.1594 62.4142 17.6768 66.8942 22.1569C71.3743 26.6369 73.8917 32.7127 73.8932 39.0484Z" fill="inherit"/>
                            <path d="M50.0036 2.83985e-07C40.1138 -0.00105351 30.4458 2.93066 22.2222 8.42438C13.9986 13.9181 7.58879 21.7271 3.80339 30.8638C0.0179832 40.0005 -0.972997 50.0545 0.955766 59.7545C2.88453 69.4544 7.6464 78.3645 14.6392 85.358C21.632 92.3516 30.5416 97.1144 40.2413 99.0442C49.941 100.974 59.9952 99.9841 69.1323 96.1996C78.2694 92.4152 86.079 86.0062 91.5737 77.7832C97.0683 69.5602 100.001 59.8925 100.001 50.0027C99.9799 36.7486 94.7057 24.0433 85.3341 14.6707C75.9625 5.29808 63.2578 0.0225437 50.0036 2.83985e-07V2.83985e-07ZM50.0036 69.9505C35.3252 69.9505 22.8791 74.5485 18.4623 80.9314C12.3542 74.7168 8.21831 66.8362 6.57379 58.2791C4.92928 49.722 5.84946 40.8698 9.21882 32.8338C12.5882 24.7979 18.2565 17.9365 25.5121 13.1111C32.7678 8.28568 41.2873 5.71137 50.001 5.71137C58.7147 5.71137 67.2342 8.28568 74.4898 13.1111C81.7454 17.9365 87.4138 24.7979 90.7831 32.8338C94.1525 40.8698 95.0727 49.722 93.4282 58.2791C91.7836 66.8362 87.6477 74.7168 81.5397 80.9314C77.1228 74.5378 64.6768 69.9505 50.0036 69.9505Z" fill="inherit"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_328_1250">
                            <rect width="100" height="100" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                }
                <input 
                    type='file' 
                    onChange={(e) => changeHandler(e)} 
                    style={style.invisiableInput} 
                    accept="image/png, image/jpeg"
                />
            </Box>
            <Typography variant='h6' color='#1C364F'>
                تحميل صورتك الشخصية
            </Typography>
            <label style={errorStyle.root}>
                {helperText}
            </label>
        </Box>
    );
}
 
export default MyPhotoInput;