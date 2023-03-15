// import { Link } from 'react-router-dom';
// import Routers from '../../router/Routers';

function PageTemplate(props) {
  console.log(props.children);
  return (
    <>
      <header>
        <ul>
          <li>
            home
            {/* <Link to="/">home</Link> */}
          </li>
          <li>
            info
            {/* <Link to="/info">info</Link>*/}
          </li> 
        </ul>
      </header>
      <main>{props.children}</main>
      <footer>푸터</footer>
    </>
  )
}

export default PageTemplate;
