import { IStyle } from 'styles/IStyle'

// MUI
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'

type Props = {
    content: string | null
    variant?: any
    title?: string
}

const MyChip: React.FC<Props> = ({ content, variant = 'outlined', title }) => {
    const style: IStyle = {
        chip: {
            borderRadius: '4px',
            padding: '9px 14px',
            fontSize: '14px',
            fontWeight: '700',
            fontFamily: 'Almarai, sans-serif',
            maxWidth: '250px',
            width: 'auto',
        },
    }

    return (
        <>
            {title ? (
                <Tooltip title={`${title}`}>
                    <Chip
                        label={`${content}`}
                        color={'primary'}
                        variant={variant}
                        sx={style.chip}
                    />
                </Tooltip>
            ) : (
                <Tooltip title={`${title}`}>
                    <Chip
                        label={`${content}`}
                        color={'primary'}
                        variant={variant}
                        sx={style.chip}
                    />
                </Tooltip>
            )}
        </>
    )
}

export default MyChip
