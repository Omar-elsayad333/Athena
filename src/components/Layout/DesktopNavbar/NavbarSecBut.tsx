// MUI
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { DarkThemeContext } from 'context/ThemeContext'
import Link from 'next/link'

type Props = {
    content?: any
    path?: any
}

const NavbarSecBut: React.FC<Props> = ({ content, path }) => {
    const { darkMode } = useContext(DarkThemeContext)

    const MyButton = styled(Button)({
        width: '202px',
        height: '46px',
        fontSize: '20px',
        fontWeight: '700',
        borderRadius: '7px',
        boxShadow: 'none',
        border: darkMode ? '1.5px solid #E0EEFF' : '1.5px solid #3F72A4',
        '&:hover': {
            color: darkMode ? '#1C364F' : '#E8F3FF',
        },
        '@media screen and (max-width: 1200px)': {
            width: '170px',
            height: '40px',
            fontSize: '16px',
            padding: '9px 5px',
            borderRadius: '21px',
        },
        '@media screen and (max-width: 400px)': {
            width: '120px',
            fontSize: '13px',
        },
    })

    return (
        <Link href={path || ''}>
            <a>
                <MyButton variant="contained" color="secondary">
                    {content}
                </MyButton>
            </a>
        </Link>
    )
}

export default NavbarSecBut
