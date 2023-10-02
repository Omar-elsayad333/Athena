import Urls from 'constant/urls'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'

type Props = {
    headerData: any
    bodyData: any
}

const MyTable: React.FC<Props> = ({ headerData, bodyData }) => {
    const { mainColors } = useTheme()
    const style = {
        container: {
            maxWidth: '100%',
            overflow: 'auto',
            display: 'grid',
        },
        root: {
            maxWidth: 'fit-content',
            paddingX: '2px',
            paddingBottom: '1px',
            borderRadius: '12px',
            borderTop: '3px solid #3F72A4',
            background: mainColors.table.border,
            overflow: 'hidden',
            '.MuiTableHead-root': {
                display: 'block',
                overflowX: 'auto',
                borderRadius: '12px',
                '.MuiTableCell-root': {
                    minWidth: '200px',
                    maxWidth: '200px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: mainColors.table.contrastText,
                    background: mainColors.linerGradient.primary,
                    borderBottom: 'none',
                    textAlign: 'right',
                },
            },
            '.MuiTableBody-root': {
                display: 'block',
                overflowX: 'auto',
                borderRadius: '12px',
                '.MuiTableRow-root': {
                    '.MuiTableCell-root': {
                        minWidth: '200px',
                        maxWidth: '200px',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        paddingY: '27px',
                        color: mainColors.table.contrastText,
                        fontSize: '14px',
                        fontWeight: '400',
                        background: mainColors.table.main,
                        borderBottom: `1px solid ${mainColors.table.border}`,
                        textAlign: 'right',
                    },
                },
            },
        },
    }

    return (
        <Box sx={style.container}>
            <Table stickyHeader sx={style.root}>
                <TableHead>
                    <TableRow>
                        {headerData.map((item: any, index: number) => (
                            <TableCell key={index}>{item.value}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bodyData?.length > 0 &&
                        bodyData.map((bodyItem: any, index: number) => (
                            <TableRow key={index}>
                                {Object.keys(bodyItem).map((cell: any, keyIndex: number) => {
                                    if (cell === 'imagePath' || cell === 'image') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                <Box
                                                    sx={{
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '50px',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        border: `solid 1px ${mainColors.paper.border}`,
                                                        backgroundImage: `url('${Urls.URL_MAIN}/${bodyItem[cell]}')`,
                                                    }}
                                                />
                                            </TableCell>
                                        )
                                    } else if (cell !== 'id' && cell !== 'middleName') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                {bodyItem[cell]}
                                            </TableCell>
                                        )
                                    } else {
                                        return null
                                    }
                                })}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Box>
    )
}

export default MyTable
