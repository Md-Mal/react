import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0()
	return (
		isAuthenticated && (

			<Button className="p-2" style={{ color: "#000" }, { fontSize: "120%" }, { width: "20%" }} onClick={() => logout()}>
				SIGN-OUT
			</Button>
		)
	)
}

export default LogoutButton
