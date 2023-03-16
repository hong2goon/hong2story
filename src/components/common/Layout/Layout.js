import { Outlet } from 'react-router-dom';
import SidePanel from '../SidePanel/SidePanel';
import './Layout.scss';

function Layout() {
  return (
    <>
      <aside className="side-panel">
        <SidePanel />
      </aside>
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;