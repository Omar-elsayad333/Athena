import { IStyle } from 'styles/IStyle'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

type Props = {
    name?: string
    content: string
    valueSetter: Function
}

const MyUploadFile: React.FC<Props> = ({ name, content, valueSetter }) => {
    const style: IStyle = {
        class: {
            padding: '5px 40px',
            borderRadius: '5px',
        },
    }

    return (
        <Button sx={style.class} component="label" variant="outlined">
            <Typography fontWeight={700} variant="h4">
                {content}
            </Typography>
            <input
                name={name}
                hidden
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => valueSetter(e.target.files, name)}
            />
        </Button>
    )
}

export default MyUploadFile
