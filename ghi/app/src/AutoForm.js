import React, {useEffect, useState} from 'react'

function AutoForm() {
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const [vin, setVin] = useState('')
    const [model, setModel] = useState('')
    const [models, setModels] = useState([])

    const colorChange = (event) => {
        setColor(event.target.value)
    }
    const yearChange = (event) => {
        setYear(event.target.value)
    }
    const vinChange = (event) => {
        setVin(event.target.value)
    }
    const modelChange = (event) => {
        setModel(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data={}

        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;

        const autoUrl = "http://localhost:8100/api/automobiles/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(autoUrl, fetchConfig)
        if (response.ok) {
            const newAuto = await response.json();
            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }
    }
    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/"
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add an automobile to inventory</h1>
                    <form onSubmit={handleSubmit} id="create-auto-form">
                        <div className="form-floating mb-3">
                            <input onChange={colorChange}
                            placeholder="color"
                            required type="text"
                            name="color" id="color"
                            className="form-control" value={color} />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={yearChange} placeholder="year"
                            required type="text"
                            name="year" id="year"
                            className="form-control" value={year} />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={vinChange} placeholder="vin"
                            required type="text"
                            name="vin" id="vin"
                            className="form-control" value={vin} />
                            <label htmlFor="vin">VIN</label>
                        </div>
                            <div className="mb-3">
                                <select onChange={modelChange}
                                required name="model"
                                id="model"
                                className="form-select" value={model} >
                                <option value="">Choose a Manufacturer</option>
                                {models?.map(model => {
                                return (
                                <option key={model.id} value={model.id}>
                                {model.name}
                                </option>
                                )
                                })}
                                </select>
                            </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
export default AutoForm
