import * as React from "react"
import {Grid, IndexContainer, IndexMain} from "../styles/indexStyles";
import Layout from "../components/layout";
import PriceCard from "../components/priceCard";
import {tiers} from "../tiers";

// markup
const IndexPage = () => {
    return (
        <Layout>
            <IndexContainer>
                <IndexMain>
                    <p>CHOOSE YOUR FIRST MEMBERSHIP</p>
                    <h1>You don't have to see the whole staircase. Just the first step.</h1>
                    <p>Getting to the top and making your vision a reality doesn't have to be daunting. Each of our
                        first
                        steps help get your started.</p>
                    <Grid>
                        {
                            tiers.map((tier, index) =>
                                <PriceCard key={index} type={tier.type} price={tier.price}
                                           description={tier.description} packages={tier.package} color={tier.color}
                                           buttonBackground={tier.buttonBackground} priceId={tier.priceId}/>
                            )
                        }
                    </Grid>
                    <p style={{marginTop: 50}}>Can't decide which step to take? Let's talk</p>
                </IndexMain>
            </IndexContainer>
        </Layout>
    )
}

export default IndexPage
