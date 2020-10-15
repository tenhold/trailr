import React from 'react'
import {Container} from 'react-bootstrap'
import Header from "./header"

const Stargazer = ({ location: { lat, lng } }) => {
	// if user reloads the page location isn't stored so set it defalut to new orleans
	lat = lat || 30.0766974;
	lng = lng || -89.8788793;
	return (
		<>
			<Container style={{ display: 'flex', padding: '40px' }}>
				<h1></h1>
				<iframe
					width="900" 
					height="600" 
					frameBorder="0" 
					scrolling="yes"
					src={`https://virtualsky.lco.global/embed/index.html?longitude=${lat}&latitude=${lng}&projection=gnomic&constellations=true&constellationlabels=true&az=73.76133336981957&live=true`}
				>
				</iframe>
			</Container>
		</>
)}


export default Stargazer;