import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';


const Profile = () => {
	const {isAuthenticated, user} = useAuth0()
	

	return (
		isAuthenticated &&(

			<Card className="mt-2 h-60 w-50 d-flex flex-column align-items-center pt-5 bg-light">
				<Card.Img src={user.picture} style={{width: '20%'}}/>
				<Card.Body className="d-flex flex-column align-items-center p-5 ">
				<Card.Title>Profile</Card.Title>
					<Card.Text className="p-3 m-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
					<h5>Name: {user.name}</h5>
					<h5>Name: {user.email}</h5>
				</Card.Text>
			</Card.Body>
			
		</Card>
		)
	)
}

export default Profile
