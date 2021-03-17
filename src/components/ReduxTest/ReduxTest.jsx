import React from 'react';
import CarsList from "../../containers/CarsList";
import Details from "../../containers/Details";
import StadtList from "../../containers/StadtList.js";
import StadtDetails from "../../containers/StadtDetails";
import TierList from "../../containers/TierList";
import TierDetails from "../../containers/TierDetails";

const ReduxTest = () => (
    <div>
        <div>
            <h3>Cars</h3>
            <CarsList/>
            <hr/>
            <h3>DetailsCar</h3>
            <Details/>
        </div>
        <hr/>
        <div>
            <h3>Stadt</h3>
            <StadtList/>
            <hr/>
            <h3>DetailsStadt</h3>
            <StadtDetails/>
        </div>
        <div>
            <h3>Tier</h3>
            <TierList/>
            <hr/>
            <h3>DetailsTier</h3>
            <TierDetails/>
        </div>
    </div>
);


export default ReduxTest;