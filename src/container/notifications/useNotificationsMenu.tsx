import { MouseEvent, useState } from 'react'

const useNotificationsMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return {
        data: {},
        states: {
            open,
            anchorEl,
        },
        actions: {
            handleClick,
            handleClose,
        },
    }
}

export default useNotificationsMenu
