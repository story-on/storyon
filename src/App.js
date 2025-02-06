import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    {/* process.env.PUBLIC_URL: https://storyon.github.io/storyon/ */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<MainPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
