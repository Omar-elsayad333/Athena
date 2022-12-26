import HeadquarterCard from "./HeadquarterCard";

// MUI
import Box from "@mui/material/Box";

const HeadquartersC: React.FC = () => {

    const data = [
        {
            id: '1',
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            id: '2',
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            id: '3',
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            id: '4',
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            id: '5',
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            id: '6',
            name: 'مقر ابو شاهين',
            location: 'أول منشية البكري',
            employees: 'باكينام السيد - أحمد الخولي',
            phoneNumber: '01221660052'
        },
        {
            id: '7',
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