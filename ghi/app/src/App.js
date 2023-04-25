import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelList';

function App(props) {
  if (props.models === undefined) {
    return null;
}
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturerlist">
            <Route path="" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          </Route>
          <Route path="carmodelslist">
            <Route path="" element={<VehicleModelList models={props.models} />} />
          </Route>
          <Route></Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
