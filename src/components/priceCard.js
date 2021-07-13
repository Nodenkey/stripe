import React, {useState} from 'react';
import {Divider, TierButton} from "../styles/indexStyles";
import getStripe from "../utils/stripejs";

const PriceCard = ({type, price, description, packages, color, buttonBackground, priceId}) => {
    const [loading, setLoading] = useState(false)


    const handleBuy = async event => {
        event.preventDefault()
        setLoading(true)
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: priceId, quantity: 1 }],
            customerEmail: 'nodenkey@gmail.com',
            mode: "subscription",
            successUrl: `${window.location.origin}/page-2/`,
            cancelUrl: `${window.location.origin}/`,
        })
        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
    }

    return (
        <div>
            <p>{type}</p>
            <h2>$ {price} <span className='description'>/ annum</span></h2>
            <p className='description'>{description}</p>
            {
                packages.map((pack, index) =>
                    <div key={index}>
                        <p>{pack}</p>
                        <Divider/>
                </div>)
            }
            <TierButton color={color} background={buttonBackground} onClick={handleBuy} disabled={loading} >Get started</TierButton>
        </div>
    );
};

export default PriceCard;