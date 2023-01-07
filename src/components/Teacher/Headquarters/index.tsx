import Loading from "components/Loading";
import HeadquarterCard from "./HeadquarterCard";
import useHeadquarters from "container/headquarter/useHeadquarters";

// MUI
import Typography from "@mui/material/Typography";

const HeadquartersC: React.FC = () => {

    const {
        data,
        loading
    } = useHeadquarters();

    return (
        <>
            { loading && <Loading /> }
            {
                data ?
                <HeadquarterCard data={data} /> :
                <Typography variant="h2" color={'primary'}>
                    لا يوجد مقرات
                </Typography> 
            }
        </>
    );
}
 
export default HeadquartersC;