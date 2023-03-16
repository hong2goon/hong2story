import { Link, NavLink } from 'react-router-dom';
import './SidePanel.scss';

function toggleOpenCls(e) {
  const th = e.target;
  const hasSubmenu = th.nextElementSibling;
  const navList = th.closest('.nav-list');
  const submenus = navList.querySelectorAll('.submenu');
  if(hasSubmenu !== null) {
    if(hasSubmenu.classList.contains('open')) {
      if(th.classList.contains('open')) {
        th.classList.remove('open');
      }
      submenus.forEach(el => {
        el.classList.remove('open');
      });
    } else {
      submenus.forEach(el => {
        el.classList.remove('open');
      });
      hasSubmenu.classList.add('open');
    }
  } else {
    submenus.forEach(el => {
      el.classList.remove('open');
    });
  }
}

function togglePanel(e) {
  e.preventDefault();
  const sidePanel = e.target.closest('.side-panel');
  sidePanel.classList.contains('active') ? sidePanel.classList.remove('active') : sidePanel.classList.add('active');
}

function SidePanel() {
  return (
    <>
      <div className="logo-box"></div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/hong2story/pageList"
              className={({isActive}) => isActive ? 'active' : undefined}
              onClick={toggleOpenCls}
            >Page List</NavLink></li>
          <li>
            <NavLink 
              to="/hong2story/styleGuide/text"
              className={({isActive}) => isActive ? 'submenu-toggle-button active open' : 'submenu-toggle-button'}
              onClick={toggleOpenCls}
            >Style Guide</NavLink>
            <ul className="submenu nav-list">
              <li>
                <NavLink 
                  to="/hong2story/styleGuide/text"
                  className={({isActive}) => isActive ? 'active' : undefined}
                >Text</NavLink>
              </li>
              <li><Link>Color</Link></li>
              <li><Link>Link, Button</Link></li>
            </ul>
          </li>
          <li>
            <NavLink 
              to="/hong2story/componentGuide/modal"
              className={({isActive}) => isActive ? 'submenu-toggle-button active open' : 'submenu-toggle-button'}
              onClick={toggleOpenCls}
            >Component Guide</NavLink>
            <ul className="submenu nav-list">
              <li>
                <NavLink 
                  to="/hong2story/componentGuide/modal"
                  className={({isActive}) => isActive ? 'submenu-toggle-button active' : undefined}
                >Modal</NavLink>
              </li>
              <li><Link>Tooltip</Link></li>
              <li><Link>Carousel</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <button 
        className="toggle-panel"
        onClick={togglePanel}
      ><span>open/close</span></button>
    </>
  )
}

export default SidePanel;
