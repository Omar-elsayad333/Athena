import style from './style';
import logo from '../../../public/images/logoInlineText(1).svg';
import layer from '../../../public/images/studentSignUpLayer.svg';
import Image from 'next/image';

// MUI
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const LayerSection = () => {
    return (
        <Container sx={style.layerSec}>
            <Box sx={style.layerSec.logo}>
                <Image alt='Athena' src={logo} />
            </Box>
            <Box sx={style.layerSec.layer}>
                <Typography variant='h2' color='primary'>
                    اهلا بك في بوابة الطلاب     
                </Typography>
                <Image alt='student signup' src={layer} />
                <Typography variant='h6' color='secondary' sx={style.layerSec.layer.privacy}>
                    تسجيلك في منصة أثينا كطالب جديد يعني ذلك انك توافق على استخدام جميع بياناتك 
                    <br/>
                    من قبل المدرسين المشتركين بالمنصة و على 
                    <u>
                        &nbsp; سياسة الخصوصية 
                    </u> 
                    &nbsp;و&nbsp;
                    <u>
                        شروط الخدمة 
                    </u>
                </Typography>
            </Box>
        </Container>
    );
}

export default LayerSection;