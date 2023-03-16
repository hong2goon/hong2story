import { Navigate } from 'react-router-dom';

function Home() {
  return (
    <Navigate to="/styleGuide/text" replace={true} />
  )
}

export default Home;