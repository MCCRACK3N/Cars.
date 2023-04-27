import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceList from './ServiceList';
import NewServiceForm from './NewServiceForm';
import TechnicianList from './TechnicianList';
import NewTechnicianForm from './NewTechnicianForm';
import { useEffect, useState } from 'react'
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelList';
import AutoList from './AutoList';
import SaleList from './SaleList';
import CustomerList from './CustomerList';
import SalespersonList from './SalespersonList';
import SaleForm from './SaleForm';
import SalespersonForm from './SalespersonForm';
import CustomerForm from './CustomerForm';
import ManufacturerForm from './ManufacturerForm';
import CarModelForm from './CarModelForm';
import AutoForm from './AutoForm';
import SalespersonHistory from './SalespersonHistory';

function App(props) {
//   if (props.models === undefined) {
//     return null;
// }
  // if (props.autos === undefined) {
  //   return null;
  // }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="technicians" index element={<TechnicianList />} />
          <Route path="technicians/create" index element={<NewTechnicianForm />} />
          <Route path="appointments" index element={<ServiceList />} />
          <Route path="appointments/create" index element={<NewServiceForm />} />
          <Route path="/" element={<MainPage />} />
          <Route path="newmanufacturer">
            <Route path="" element={<ManufacturerForm/>} />
          </Route>
          <Route path="manufacturerlist">
            <Route path="" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          </Route>
          <Route path="newcarmodel">
            <Route path="" element={<CarModelForm/>} />
          </Route>
          <Route path="carmodelslist">
            <Route path="" element={<VehicleModelList models={props.models} />} />
          </Route>
          <Route path="newauto">
            <Route path="" element={<AutoForm/>} />
          </Route>
          <Route path="autolist">
            <Route path="" element={<AutoList autos={props.autos} />} />
          </Route>
          <Route path="newsale">
            <Route path="" element={<SaleForm/>} />
          </Route>
          <Route path="salelist">
            <Route path="" element={<SaleList/>} />
          </Route>
          <Route path="newcustomer">
            <Route path="" element={<CustomerForm/>} />
          </Route>
          <Route path="customerlist">
            <Route path="" element={<CustomerList/>} />
          </Route>
          <Route path="newsalesperson">
            <Route path="" element={<SalespersonForm/>} />
          </Route>
          <Route path="salespeoplelist">
            <Route path="" element={<SalespersonList/>} />
          </Route>
          <Route path="salespersonhistoy">
            <Route path="" element={<SalespersonHistory/>} />
          </Route>

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
