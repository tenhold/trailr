import React from 'react'
import {Container} from 'react-bootstrap'
import Header from "./header"

const Stargazer = ({ user }) => {
	const lat = 34.4326;
	const lng = -119.86286000000001;

return (
	<>
    <Container>
     <h1>Welcome to the Stargazer Page!!!</h1>
			<iframe width="500" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={`https://virtualsky.lco.global/embed/index.html?longitude=${lat}&latitude=${lng}&projection=gnomic&constellations=true&constellationlabels=true&az=73.76133336981957`} allowTransparency="true"></iframe>

    </Container>
	</>
)}



export default Stargazer;