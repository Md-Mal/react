import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0()


	return (
		!isAuthenticated && (
			<Button variant='secondary'  style= {{color:"#000"},{fontSize:"120%"},{width:"30%"}} className="p-2" onClick={()  => loginWithRedirect()}>
				SIGN-IN
			</Button>

		)
		
	)
}

export default LoginButton
