import DataCard from './DataCard'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const HeadquarterC: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()
    const style = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        title: {
            flex: '100%',
        },
    }

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:-
            </Typography>
            <DataCard data={data.headquarterData.name} title="أسم المقر" />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-
            </Typography>
            <DataCard data={data.headquarterData.city} title="المدينة" />
            <DataCard data={data.headquarterData.region} title="أسم المنطقة" />
            <DataCard data={data.headquarterData.street} title="أسم الشارع" />
            <DataCard data={data.headquarterData.building} title="رقم المبنى" />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-
            </Typography>
            {data.headquarterData.phones &&
                data.headquarterData.phones.map((item: any, index: number) => (
                    <DataCard data={item.phone} title={`تليفون ${index + 1}`} />
                ))}
        </Box>
    )
}

export default HeadquarterC
