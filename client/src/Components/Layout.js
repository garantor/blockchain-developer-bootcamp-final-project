import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import ResponsiveAppBar from './AppBar'
import ClippedDrawer from "./sidebar";
// the oulet allows you to layout you routes, everything about the layout components will always show like navbar and everything below will always shoe like footer

function Layout({ account, balance, btnhandler, connection, handleListBtn }) {
  return (
    <main className="App">
      {connection ? (
        <ClippedDrawer handleListBtn={handleListBtn} />
      ) : (
        <ResponsiveAppBar handleConnect={btnhandler} />
      )}

      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}

export default Layout