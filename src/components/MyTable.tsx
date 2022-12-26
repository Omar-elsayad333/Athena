import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const header = [
    { 
        value: 'الاسم الاول', 
    },
    {
        value: 'الاسم الاخير',
    },
    {
        value: 'الاسم بالكامل',
    },
    {
        value: 'الصف الدراسي',
    },
];

const myData = [
    {
        firstName: 'مروان',
        lastName: 'عبد العزيز',
        fullName: 'مروان محمد عبد العزيز',
        year: 'الصف الثالث الثانوي'
    },
    {
        firstName: 'مروان',
        lastName: 'عبد العزيز',
        fullName: 'عباس ابو القاسم بن فرناس',
        year: 'الصف الثالث الثانوي'
    },
]

const MyTable = () => {
    
    const { mainColors } = useContext(DarkThemeContext);

    const classes = {
        root: {
            width: 'fit-content',
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
                    width: '200px',
                    minWidth: '200px',
                    textOverflow: 'ellipsis',
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
                borderRadius: '12px',
                overflowX: 'auto',
                '.MuiTableRow-root': {
                    '.MuiTableCell-root': {
                        width: '200px',
                        maxWidth: '200px',
                        textOverflow: 'ellipsis',
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
        }
    }

    const style = { 
        root: {
            width: '100%',
            overflowX: 'auto',
            display: 'flex',
        }
    }

    return (
        <Box sx={style.root}>
            <Table stickyHeader sx={classes.root}>
                <TableHead>
                    <TableRow>
                        {header.map((item: any, index: number) => (
                            <TableCell
                                key={index}
                            >
                                {item.value}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        myData.map((item:any, index:any) => {
                            return (
                                <TableRow key={index}>
                                    {Object.keys(item).map((cell:any, index:any) => {
                                        return(
                                            <TableCell align='right' key={index}>
                                                {item[cell]}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </Box>
    );
}

export default MyTable;