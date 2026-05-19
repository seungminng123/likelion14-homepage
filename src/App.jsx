import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Members from '../src/pages/Members';
import RootLayout from '../src/layout/RootLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}