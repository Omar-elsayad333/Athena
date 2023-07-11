import { IStyle } from 'styles/IStyle'

// MUI
import Chip from '@mui/material/Chip'

type Props = {
    content: string | null
    variant?: any
}

const MyChip: React.FC<Props> = ({ content, variant = 'outlined' }) => {
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

    return <Chip label={`${content}`} color={'primary'} variant={variant} sx={style.chip} />
}

export default MyChip
