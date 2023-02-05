import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";

type Props = {

}

const FilterWedgit: React.FC<Props> = () => {

    const { mainColors } = useContext(DarkThemeContext);

    const classes = {
        filterContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
        },
        filter: {   
            maxWidth: '900px',
            minWidth: '200px',
            height: '66px',
            background: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
            borderRadius: '10px',
            transition: '.2s ease-out',
        },

    }

    return (
        <Box sx={classes.filterContainer}>
            <Box sx={classes.filter}>
                
            </Box>

        </Box>
    );
}
 
export default FilterWedgit;