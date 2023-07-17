import React, { useEffect, useState } from 'react';

function VehicleModelList(props) {
  const [models, setModels] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8100/api/models/');
    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (model) => {
    try {
      // Make an API request to delete the model
      const response = await fetch(`http://localhost:8100/api/models/${model.id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // Remove the deleted model from the list
        setModels((prevModels) => prevModels.filter((m) => m.id !== model.id));
        console.log(`Deleted model with name: ${model.name}`);
      } else {
        console.log('Failed to delete the model');
      }
    } catch (error) {
      console.log('Error occurred while deleting the model:', error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4">Automobiles</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Picture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {models?.map((model) => {
            return (
              <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td>
                  <img
                    src={model.picture_url}
                    alt="Model"
                    style={{ width: '200px', height: 'auto' }}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(model)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default VehicleModelList;
