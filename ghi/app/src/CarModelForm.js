import React, {useEffect, useState} from 'react'

function CarModelForm() {
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [manufacturers, setManufacturers] = useState([])

    const nameChange = (event) => {
        setName(event.target.value)
    }
    const pictureUrlChange = (event) => {
        setPicture(event.target.value)
    }
    const manufacturerChange = (event) => {
        setManufacturer(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data={}
        data.name = name;
        data.picture_url = picture;
        data.manufacturer = manufacturer;

        console.log(data)
        const modelUrl = "http://localhost:8100/api/models/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(modelUrl, fetchConfig)
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);
            setName('');
            setPicture('');
            setManufacturer('');
        }
    }
    const fetchData = async () => {
        const url = "http://localhost:8100/api/manufacturers/"
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Car Model</h1>
                    <form onSubmit={handleSubmit} id="create-car_model-form">
                        <div className="form-floating mb-3">
                            <input onChange={nameChange}
                            placeholder="name"
                            required type="text"
                            name="name" id="name"
                            className="form-control" value={name} />
                            <label htmlFor="name">Car Model</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={pictureUrlChange} placeholder="Picture Url"
                            required type="text"
                            name="picture_url" id="picture_url"
                            className="form-control" value={picture} />
                            <label htmlFor="picture_url">Picture Url</label>
                        </div>
                            <div className="mb-3">
                                <select onChange={manufacturerChange}
                                required name="manufacturer"
                                id="manufacturer"
                                className="form-select" value={manufacturer} >
                                <option value="">Choose a Manufacturer</option>
                                {manufacturers?.map(man => {
                                return (
                                <option key={man.id} value={man.id}>
                                {man.name}
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

    )
}
export default CarModelForm
