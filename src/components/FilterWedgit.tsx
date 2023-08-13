import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    allFilter?: string
    filters: any[]
    getSelected: Function
    selected: any
}

const FilterWedgit: React.FC<Props> = ({ selected, filters, getSelected, allFilter = '' }) => {
    const { mainColors, darkMode } = useTheme()
    const style: IStyle = {
        filterContainer: {
            width: 'fit-content',
            maxWidth: '100%',
            padding: '11px 11px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            overflow: 'auto',
            background: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
            borderRadius: '10px',
            transition: '.2s ease-out',
        },
        option: {
            padding: '10px 22px',
            minWidth: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: '7px',
            background: mainColors.backgroundColor.main,
            border: '1px solid #B6D5F0',
        },
    }

    return (
        <Box sx={style.filterContainer}>
            {allFilter && (
                <Box
                    sx={style.option}
                    className={`filter ${
                        selected.value === 'all'
                            ? darkMode
                                ? 'darkSelectedTable'
                                : 'selectedTable'
                            : ''
                    }`}
                    onClick={() => {
                        getSelected({
                            name: 'all',
                            id: 'all',
                        })
                    }}
                >
                    <Typography fontWeight={700} fontSize="h4" color={mainColors.primary.main}>
                        {allFilter}
                    </Typography>
                </Box>
            )}
            {filters.length > 0 &&
                filters.map((item: any, index: number) => {
                    return (
                        <Box
                            sx={style.option}
                            className={`filter ${
                                selected.value === item.name
                                    ? darkMode
                                        ? 'darkSelectedTable'
                                        : 'selectedTable'
                                    : ''
                            }`}
                            key={index}
                            onClick={() => {
                                getSelected({
                                    name: item.name,
                                    id: item.id ? item.id : index,
                                })
                            }}
                        >
                            <Typography
                                fontWeight={700}
                                fontSize="h4"
                                color={mainColors.primary.main}
                            >
                                {item.name}
                            </Typography>
                        </Box>
                    )
                })}
        </Box>
    )
}

export default FilterWedgit
