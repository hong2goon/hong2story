import { Routes, Route } from 'react-router-dom';

import Layout from '../common/Layout/Layout';
import Home from '../../pages/Home';
import PageList from '../../pages/pageList/PageList';

import Text from '../../pages/styleGuide/Text';
import Modal from '../../pages/componentGuide/Modal';

import NotFound from '../../pages/NotFound';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pageList" element={<PageList />} />
        <Route path="/styleGuide/text" element={<Text />} />
        <Route path="/componentGuide/modal" element={<Modal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Routers;