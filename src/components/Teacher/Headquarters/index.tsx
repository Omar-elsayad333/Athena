import HeadquarterCard from "./HeadquarterCard";

type Props = {
    data: any;
}

const HeadquartersC: React.FC<Props> = ({data}) => {

    return (
        <>
            <HeadquarterCard data={data} /> :
        </>
    );
}
 
export default HeadquartersC;