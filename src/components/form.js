import React from 'react';
import { useState } from 'react';

function HouseInput(props){

    const [nameValue, setNameValue] = useState('');
    const [addressValue, setAddressValue] = useState('');
    const [squareFeetValue, setSquareFeetValue] = useState('');
    const [roomNumberValue, setRoomNumberValue] = useState('');

    const submitHouse = (event) => {
        event.preventDefault(); //Stops refresh after submitting

        const newHouseData = {
            houseName: nameValue,
            houseAddress: addressValue,
            squareFootage: squareFeetValue,
            roomNumber: roomNumberValue

        }

        props.addHouse(newHouseData);

        console.log("button was clicked");
    }

    return(
        <div>
            <div className='bg-dark text-light text-center p-3'>
                <h2> New Housing List </h2>
            </div>

            <div className="card container mt-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label> House Name </label>
                                <input type="text" className="form-control" id="house-name" value={nameValue} onChange={(event) => setNameValue(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label> House Address </label>
                                <input type="text" className="form-control" id="house-address" value={addressValue} onChange={(event) => setAddressValue(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label> Square Footage </label>
                                <input type="number" className="form-control" id="square-footage" value={squareFeetValue} onChange={(event) => setSquareFeetValue(event.target.value)}/>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="form-group">
                                <label> Number of Rooms </label>
                                <input type="number" className="form-control" id="number-of-rooms" value={roomNumberValue} onChange={(event) => setRoomNumberValue(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button onClick={submitHouse} className='btn btn-primary mt-3'> Add House </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HouseInput;