import Questions from './Questions';
import { IStyle } from 'styles/IStyle';
import MyInput from 'components/MyInput';
import MyTextArea from 'components/MyTextArea';
import { useTheme } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any;
    states: any;
    actions: any;
}

const Sections: React.FC<Props> = ({ data, actions}) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            width: '580px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '45px'
        },
        sectionContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '55px'
        },
        cardName: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            padding: '21px 33px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`
        },
        cardNameActions: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '18px'
        },
        sectionDetails: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '45px'
        },
        sectionName: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px'
        },
        paragraphImages: {
            maxWidth: '100%',
            display: 'flex',
            overflow: 'auto',
            gap: '35px',
        },
    }

    return (
        <Box sx={style.container}>  
            {
                data.map((section: any, index: number) => (
                    <Box key={index} sx={style.sectionContainer}>
                        <Box key={index} sx={style.cardName}>
                            <Typography variant={'h2'} color='primary'>
                                {`${index+1}- ${section.name}`}
                            </Typography>
                            <Box sx={style.cardNameActions}>
                                {
                                    !section.isPrime ?
                                    <svg onClick={() => actions.primeSection(index)} width="39" height="39" viewBox="0 0 39 39" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.1838 33.7057C27.9271 33.7067 27.6739 33.6462 27.4455 33.5291L19.26 29.2438L11.0745 33.5291C10.8087 33.6689 10.509 33.7313 10.2095 33.7092C9.91003 33.6872 9.62274 33.5815 9.38031 33.4043C9.13787 33.227 8.95002 32.9854 8.83811 32.7067C8.7262 32.428 8.69472 32.1235 8.74725 31.8278L10.3522 22.7917L3.73965 16.3717C3.53334 16.1658 3.38698 15.9076 3.31629 15.6249C3.2456 15.3421 3.25324 15.0454 3.3384 14.7667C3.43142 14.4814 3.60254 14.228 3.83234 14.0351C4.06213 13.8422 4.3414 13.7175 4.63845 13.6753L13.7869 12.3431L17.8155 4.1095C17.9469 3.83814 18.1521 3.60929 18.4076 3.44916C18.6631 3.28903 18.9585 3.2041 19.26 3.2041C19.5615 3.2041 19.8569 3.28903 20.1124 3.44916C20.3679 3.60929 20.5731 3.83814 20.7045 4.1095L24.7812 12.3271L33.9297 13.6592C34.2267 13.7015 34.506 13.8261 34.7358 14.019C34.9656 14.2119 35.1367 14.4654 35.2297 14.7506C35.3149 15.0294 35.3225 15.3261 35.2519 15.6088C35.1812 15.8916 35.0348 16.1498 34.8285 16.3556L28.2159 22.7756L29.8209 31.8118C29.8782 32.1127 29.8482 32.4237 29.7344 32.7081C29.6207 32.9925 29.4279 33.2384 29.1789 33.4168C28.8883 33.6205 28.5383 33.7221 28.1838 33.7057ZM19.26 25.8412C19.5173 25.8347 19.7718 25.8956 19.9983 26.0177L26.0491 29.2277L24.8935 22.4707C24.8487 22.2127 24.8677 21.9476 24.9488 21.6987C25.0299 21.4497 25.1708 21.2243 25.359 21.0422L30.174 16.3396L23.433 15.3445C23.1858 15.2947 22.9538 15.1874 22.7558 15.0313C22.5578 14.8751 22.3994 14.6745 22.2934 14.4457L19.26 8.42695L16.2265 14.4457C16.1104 14.6763 15.9404 14.8756 15.7308 15.0264C15.5212 15.1773 15.2784 15.2754 15.0228 15.3124L8.2818 16.3075L13.0968 21.0101C13.285 21.1922 13.4258 21.4176 13.507 21.6665C13.5881 21.9155 13.6071 22.1806 13.5622 22.4386L12.4066 29.1154L18.4575 25.9054C18.7139 25.8101 18.9917 25.7879 19.26 25.8412Z" fill="inherit"/>
                                    </svg> :
                                    <svg onClick={() => actions.notPrimeSection(index)} width="39" height="39" viewBox="0 0 39 39" fill={mainColors.warning.main} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.1838 33.7047C27.9271 33.7058 27.674 33.6452 27.4455 33.5282L19.26 29.2428L11.0745 33.5282C10.8087 33.6679 10.509 33.7303 10.2095 33.7083C9.91005 33.6862 9.62275 33.5805 9.38032 33.4033C9.13789 33.2261 8.95004 32.9844 8.83813 32.7057C8.72622 32.427 8.69474 32.1225 8.74726 31.8269L10.3523 22.7907L3.73966 16.3707C3.53335 16.1648 3.387 15.9067 3.31631 15.6239C3.24562 15.3411 3.25326 15.0445 3.33841 14.7657C3.43144 14.4805 3.60256 14.227 3.83235 14.0341C4.06215 13.8412 4.34141 13.7165 4.63846 13.6743L13.787 12.3422L17.8155 4.10852C17.9469 3.83716 18.1521 3.60831 18.4076 3.44818C18.6631 3.28805 18.9585 3.20312 19.26 3.20312C19.5615 3.20312 19.8569 3.28805 20.1124 3.44818C20.3679 3.60831 20.5731 3.83716 20.7045 4.10852L24.7812 12.3261L33.9297 13.6583C34.2268 13.7005 34.506 13.8251 34.7358 14.018C34.9656 14.211 35.1367 14.4644 35.2298 14.7497C35.3149 15.0284 35.3226 15.3251 35.2519 15.6079C35.1812 15.8906 35.0348 16.1488 34.8285 16.3547L28.2159 22.7747L29.8209 31.8108C29.8782 32.1117 29.8482 32.4227 29.7345 32.7071C29.6207 32.9915 29.4279 33.2374 29.1789 33.4158C28.8883 33.6195 28.5383 33.7211 28.1838 33.7047Z" fill="inherit"/>
                                    </svg>
                                }
                                {
                                    !section.open ?
                                    <svg onClick={() => actions.openSection(index)} width="40" height="40" viewBox="0 0 40 40" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5449 26.0595C19.1643 26.0603 18.7955 25.9277 18.5025 25.6849L8.72999 17.5412C8.39737 17.2647 8.1882 16.8674 8.14849 16.4368C8.10879 16.0061 8.24179 15.5773 8.51825 15.2446C8.79472 14.912 9.19199 14.7029 9.62267 14.6631C10.0534 14.6234 10.4822 14.7564 10.8148 15.0329L19.5449 22.3297L28.275 15.2935C28.4416 15.1582 28.6333 15.0572 28.8391 14.9962C29.0448 14.9352 29.2606 14.9155 29.474 14.9382C29.6875 14.961 29.8943 15.0256 30.0826 15.1285C30.271 15.2314 30.4371 15.3705 30.5715 15.5378C30.7207 15.7053 30.8337 15.9018 30.9034 16.1149C30.9731 16.3281 30.998 16.5533 30.9766 16.7766C30.9552 16.9998 30.8879 17.2162 30.779 17.4123C30.67 17.6083 30.5218 17.7797 30.3435 17.9158L20.571 25.7827C20.2695 25.9871 19.9083 26.0846 19.5449 26.0595Z" fill="inherit"/>
                                    </svg> :
                                    <svg onClick={() => actions.closeSection(index)} width="40" height="40" viewBox="0 0 40 40" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.545 13.0313C19.9255 13.0305 20.2943 13.1631 20.5874 13.4059L30.3599 21.5496C30.6925 21.8261 30.9016 22.2234 30.9414 22.6541C30.9811 23.0847 30.8481 23.5136 30.5716 23.8462C30.2951 24.1788 29.8979 24.388 29.4672 24.4277C29.0365 24.4674 28.6077 24.3344 28.2751 24.0579L19.545 16.7611L10.8149 23.7973C10.6483 23.9326 10.4566 24.0336 10.2508 24.0946C10.045 24.1556 9.82921 24.1753 9.6158 24.1526C9.40238 24.1299 9.19556 24.0652 9.00722 23.9623C8.81887 23.8594 8.65272 23.7203 8.51831 23.553C8.36915 23.3855 8.25619 23.1891 8.18649 22.9759C8.11679 22.7627 8.09186 22.5375 8.11327 22.3142C8.13468 22.091 8.20195 21.8746 8.31089 21.6786C8.41983 21.4825 8.56808 21.3111 8.74634 21.175L18.5188 13.3082C18.8203 13.1037 19.1816 13.0062 19.545 13.0313Z" fill="inherit"/>
                                    </svg>
                                }   
                            </Box>
                        </Box>
                        {
                            section.open &&
                            <Box sx={style.sectionDetails}>
                                <Box sx={style.sectionName}>
                                    <Typography 
                                        variant='h3' 
                                        fontWeight={700} 
                                        color={mainColors.title.main}
                                    >
                                        رأس السؤال:-
                                    </Typography>
                                    <MyInput
                                        error={false}
                                        helperText=''
                                        value={section.name}
                                        indexes={{parent: index}}
                                        placeholder='حدد رأس السؤال'   
                                        onChange={actions.sectionNameHandler}
                                    />
                                </Box>
                                <MyTextArea 
                                    helperText=''
                                    indexes={index}
                                    value={section.paragraph}
                                    onChange={actions.sectionParagraphHandler}
                                    addImage={actions.sectionParagraphImageHandler}
                                    placeholder='أكتب الفقرة الخاصة بالسؤال إن وجد:-'
                                />
                                <Box sx={style.paragraphImages}>
                                    {
                                        section.images.map((image: any) => (
                                            <Box sx={
                                                    {
                                                        backgroundImage: `url('${image.image.data}')`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        minWidth: '170px',
                                                        height: '170px',
                                                        border: '2px solid #3F72A4',
                                                        borderRadius: '10px'            
                                                    }
                                                }
                                            />
                                        ))
                                    }
                                </Box>
                                <Questions
                                    data={section.questions}
                                    actions={actions}
                                    parentIndex={index}
                                />
                            </Box>
                        }
                    </Box>
                ))
            }
        </Box>
    );
}
 
export default Sections;