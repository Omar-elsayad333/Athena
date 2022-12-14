import HeadquarterCard from "./HeadquarterCard";

// MUI
import Box from "@mui/material/Box";

const HeadquartersC: React.FC = () => {

    const data = [
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
    ]

    return (
        <Box>
            <HeadquarterCard data={data} />
        </Box>
    );
}
 
export default HeadquartersC;