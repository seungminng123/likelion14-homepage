import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Members from '../src/pages/Members';
import Login from '../src/pages/Login';
import Project from '../src/pages/Project';
import Recruit from '../src/pages/Recruit';
import RootLayout from '../src/layout/RootLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element = {<Members />}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/project" element = {<Project/>}/>
          <Route path="/recruit" element = {<Recruit/>}/>
          <Route path="/members" element= {<Members />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}