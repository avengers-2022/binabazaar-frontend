import React from 'react';

const BazerLocation = () => {
    return (
        <div className="bazerLocation">
            {/* <div className="container"> */}
            <div className="localBazer">
                <h1> Local Bazer </h1>
            </div>
            <div className="row location">
                <div className="col-md-3">
                    <select >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button>Search Bazer</button>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default BazerLocation;