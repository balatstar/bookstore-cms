import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import NotMatch from './components/NotMatch';

function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;