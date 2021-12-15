import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<button
			className="App-logoutButton"
			onClick={() => {
				logout({
					returnTo: `${window.location.protocol}//${window.location.host}${window.location.pathname}`, // El protocol es el protocolo https:, luego viene doble slash (//), el host es cesarsuarezwd.github.io y el path authentication-prototype
				});
			}}
		>
			Logout
		</button>
	);
};

export { LogoutButton };