import { withAuth } from 'routes/withRoute'
import useLayout from 'container/useLayout'
import MobileSideNav from './MobileSideNav'
import DesktopSideNav from './DesktopSideNav'

// MUI
import Box from '@mui/material/Box'

type IProps = {
  children?: any
}

const Layout: React.FC<IProps> = ({ children }) => {
  const { sideNavState, controleSideNav, mobileSideNavState, controleMobileSideNav, currentPath } =
    useLayout()

  const style = {
    container: {
      display: 'flex',
      '@media screen and (max-width: 1200px)': {
        flexDirection: 'column',
      },
    },
  }

  return (
    <Box>
      <Box sx={style.container}>
        <DesktopSideNav
          controleSideNav={controleSideNav}
          sideNavState={sideNavState}
          currentPath={currentPath}
        />
        <MobileSideNav
          mobileSideNavState={mobileSideNavState}
          controleMobileSideNav={controleMobileSideNav}
          currentPath={currentPath}
        />
        {children}
      </Box>
    </Box>
  )
}

export default withAuth(Layout)
