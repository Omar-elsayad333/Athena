import { IStyle } from "styles/IStyle";
import { useTheme } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    allFilter?: string;
    filters: any;
    getSelected: Function;
}

const FilterWedgit: React.FC<Props> = ({ filters, getSelected, allFilter = '' }) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        filterContainer: {   
            maxWidth: '900px',
            padding: '11px 11px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            background: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
            borderRadius: '10px',
            transition: '.2s ease-out',
        },
        option: {
            padding: '10px 22px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '7px',
            background: mainColors.backgroundColor.main,
            border: '1px solid #B6D5F0',
        }
    }

    const selectFilter = (event: any) => {
        const filters = Array.from(document.getElementsByClassName('filter') as HTMLCollectionOf<HTMLElement>)
        filters.forEach((element) => {
            element.style.background = mainColors.paper.main;
            element.style.boxShadow = 'none';
        })
        event.currentTarget.style.background = mainColors.linerGradient.primary
        event.currentTarget.style.boxShadow = mainColors.shadow.main
    }

    return (
        <Box sx={style.filterContainer}>
            {
                allFilter && 
                <Box
                    sx={style.option}
                    className={'filter'}  
                    onClick={(event) => {
                        getSelected(
                            {
                                name: 'all', 
                                id: 'all'
                            }
                        );
                        selectFilter(event)
                    }}
                >
                    <Typography fontWeight={700} fontSize='h4' color={mainColors.primary.main}>
                        {allFilter}
                    </Typography>
                </Box>
            }
            {
                filters.length > 0 &&
                filters.map((item: any) => {
                    return (
                        <Box 
                            sx={style.option} 
                            className={'filter'}  
                            key={item.id} 
                            onClick={(event) => {
                                getSelected(
                                    {
                                        name: item.name, 
                                        id: item.id
                                    }
                                );
                                selectFilter(event)
                            }}
                        >
                            <Typography fontWeight={700} fontSize='h4' color={mainColors.primary.main}>
                                {item.name}
                            </Typography>
                        </Box>
                    )
                })
            }
        </Box>
    );
}
 
export default FilterWedgit;