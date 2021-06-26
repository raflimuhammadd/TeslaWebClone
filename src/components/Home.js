import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touches Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                 title="Model Y"
                 description="Order Online for Touches Delivery"
                 backgroundImg="model-y.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
            />
            <Section 
                 title="Model 3"
                 description="Order Online for Touches Delivery"
                 backgroundImg="model-3.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
            />
            <Section 
                 title="Model X"
                 description="Order Online for Touches Delivery"
                 backgroundImg="model-x.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
            />
            <Section 
                 title="Lower Cost Solar Panels in America"
                 description="Money-back guarantee"
                 backgroundImg="solar-panel.jpg"
                 leftBtnText="Order Now"
                 rightBtnText="Learn More"
            />
            <Section 
                 title="Splar for New Roofs"
                 description="Solar Roof Cost less Than a New Roof Plus Solar Panels"
                 backgroundImg="solar-roof.jpg"
                 leftBtnText="Order Now"
                 rightBtnText="Learn More"
            />
            <Section 
                 title="Accessories"
                 description=""
                 backgroundImg="accessories.jpg"
                 leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
