import React from 'react';
import {Divider, TierButton} from "../styles/indexStyles";

const PriceCard = ({type, price, description, packages, color, buttonBackground}) => {
    return (
        <div>
            <p>{type}</p>
            <h2>$ {price} <span className='description'>/ annum</span></h2>
            <p className='description'>{description}</p>
            {
                packages.map((pack, index) =>
                    <>
                        <p key={index}>{pack}</p>
                        <Divider/>
                </>)
            }
            <TierButton color={color} background={buttonBackground}>Get started</TierButton>
        </div>
    );
};

export default PriceCard;