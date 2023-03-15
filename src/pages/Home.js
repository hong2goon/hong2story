import { useLocation } from 'react-router-dom';
import PageTemplate from '../components/common/PageTemplate/PageTemplate';

function Home() {
  
  const location = useLocation();

  return (
    <div>
      <p>{location.pathname}</p>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>

      <PageTemplate children={location.pathname} />
    </div>
  )
}

export default Home;