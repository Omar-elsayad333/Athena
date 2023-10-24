import { useTheme } from 'context/ThemeContext'
import { convertDateToShortDate } from 'utils/converters'
import { examStudentStatesTranslate } from 'utils/translateors'
import AbsentStudentIcon from 'components/Svgs/AbsentStudentIcon'
import FailedStudentIcon from 'components/Svgs/FailedStudentIcon'
import SuccessedStudentIcon from 'components/Svgs/SuccessedStudentIcon'
import DistinctiveStudentIcon from 'components/Svgs/DistinctiveStudentIcon'

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

const ExamTable: React.FC<Props> = ({ headerData, bodyData }) => {
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
                    {bodyData.length > 0 &&
                        bodyData.map((bodyItem: any, index: number) => (
                            <TableRow key={index}>
                                {Object.keys(bodyItem).map((cell: any, keyIndex: number) => {
                                    if (cell === 'examName') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                {bodyItem[cell]}
                                            </TableCell>
                                        )
                                    } else if (cell == 'studentDegree') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                {`${bodyItem[cell]} / ${bodyItem['examDegree']}`}
                                            </TableCell>
                                        )
                                    } else if (cell == 'state' && bodyItem['state'] == 'Absent') {
                                        return (
                                            <TableCell
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                }}
                                                align="right"
                                                key={keyIndex}
                                            >
                                                <AbsentStudentIcon width={15} />
                                                {examStudentStatesTranslate(bodyItem['state'])}
                                                {` / `}
                                            </TableCell>
                                        )
                                    } else if (
                                        cell == 'state' &&
                                        bodyItem['state'] == 'Excellent'
                                    ) {
                                        return (
                                            <TableCell
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                }}
                                                align="right"
                                                key={keyIndex}
                                            >
                                                <DistinctiveStudentIcon width={15} />
                                                {examStudentStatesTranslate(bodyItem['state'])}
                                                {` / `}
                                            </TableCell>
                                        )
                                    } else if (cell == 'state' && bodyItem['state'] == 'Failure') {
                                        return (
                                            <TableCell
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                }}
                                                align="right"
                                                key={keyIndex}
                                            >
                                                <FailedStudentIcon width={15} />
                                                {examStudentStatesTranslate(bodyItem['state'])}
                                                {` / `}
                                            </TableCell>
                                        )
                                    } else if (
                                        cell == 'state' &&
                                        bodyItem['state'] == 'Successful'
                                    ) {
                                        return (
                                            <TableCell
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                }}
                                                align="right"
                                                key={keyIndex}
                                            >
                                                <SuccessedStudentIcon width={15} />
                                                {examStudentStatesTranslate(bodyItem['state'])}
                                                {` / `}
                                            </TableCell>
                                        )
                                    } else if (cell == 'createdOn') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                {convertDateToShortDate(bodyItem[cell])}
                                            </TableCell>
                                        )
                                    } else if (cell == 'percentage') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                {`% ${bodyItem[cell]}`}
                                            </TableCell>
                                        )
                                    } else if (cell == 'points') {
                                        return (
                                            <TableCell align="right" key={keyIndex}>
                                                {bodyItem[cell]}
                                            </TableCell>
                                        )
                                    } else if (cell === 'examId' || cell == 'attendance') {
                                        return null
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

export default ExamTable
