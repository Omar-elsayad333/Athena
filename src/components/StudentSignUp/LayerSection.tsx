import style from './style';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/primary-inline-logo.svg';
import layer from '../../../public/images/studentSignUpLayer.svg';
import MyButton from '../LogButS';

// MUI
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const scroll = () => {
    const layerSection: HTMLElement = document.getElementById('layerSection')!;
    window.scrollTo({
        top: layerSection.scrollHeight,
        behavior: 'smooth',
    });
};

const LayerSection: React.FC = () => {    
    return (
        <Container id='layerSection' sx={style.layerSec}>
            <Box sx={style.layerSec.logo}>
                <Image alt='Athena' src={logo} />
            </Box>
            <Box sx={style.layerSec.layer}>
                <Typography variant='h1' color={'#1C364F'}>
                    اهلا بك في بوابة الطلاب     
                </Typography>
                <Image alt='student signup' src={layer} />
                <Typography fontSize={14} fontWeight={300} color='primary' sx={style.layerSec.layer.privacy}>
                    تسجيلك في منصة أثينا كطالب جديد يعني ذلك انك توافق على استخدام جميع بياناتك 
                    <br/>
                    من قبل المدرسين المشتركين بالمنصة و على 
                    <u style={style.layerSec.layer.link}>
                        &nbsp; سياسة الخصوصية 
                    </u> 
                    &nbsp;و&nbsp;
                    <u style={style.layerSec.layer.link}>
                        شروط الخدمة 
                    </u>
                </Typography>
            </Box>
            <Box sx={style.layerSec.scrollBut}>
                <MyButton content='انشاء الحساب' onClick={scroll}/>
                <Typography variant='h6' color={'#1C364F'}>
                    لدي حساب بالفعل 
                    <Link href='/studentLogin' style={style.layerSec.scrollBut.link}>
                        <a className='dark-link'>
                            &nbsp;تسجيل الدخول
                        </a>
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default LayerSection;