import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceList from './ServiceList';
import NewServiceForm from './NewServiceForm';
import TechnicianList from './TechnicianList';
import NewTechnicianForm from './NewTechnicianForm';
import { useEffect, useState } from 'react'

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="technicians" index element={<TechnicianList />} />
          <Route path="technicians/create" index element={<NewTechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


          {/* <Route path="/appointments">
            <Route index element={<ServiceList appointments={appointments} setAppointments={setAppointments}/>} />
            <Route path="new" element= {<NewServiceForm />} />
          </Route> */}