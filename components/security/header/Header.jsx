import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logop from "../../../public/icons/LogoPlataforma1.png";
import styles from "../../../styles/Header.module.scss";
import position from "../../../styles/Profile.module.scss";
import styles2 from "../../../styles/Userdata.module.scss";

let auth0 = {
	domain: 'https://gethired.us.auth0.com',
	response_type: 'token',
	client_id: '9IKIwhKs44cPB0VceKTaVHZnXRSd2zUJ',
	redirect_uri: ''
}

const Header = () => {

	let [user, setUser] = React.useState(null);
	React.useEffect(async () => {
		auth0.redirect_uri = window.location.origin

		if(window.location.hash) {
			const urlParams = new URLSearchParams(window.location.hash.replace('#', ''));
			const accessToken = urlParams.get('access_token');
			if(accessToken) {
				localStorage.setItem('access_token', accessToken);
				window.location = window.location.origin;
				return;
			}
		}

		if(localStorage.getItem('access_token') && !user) {
			try {
				// Getting the user info from Auth0 directly
				const userReq = await fetch(
					`${auth0.domain}/userinfo`,
					{
						headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}
					}
				);
				setUser(await userReq.json());

				// Signup on our database - Return data is not used
				fetch('https://ms-login.herokuapp.com/auth/sign_up', {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`
					}
				});

				// Loging on our database - Return data is not used
				fetch('https://ms-login.herokuapp.com/auth/sign_in', {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`
					}
				});
			} catch(err) {
				localStorage.removeItem('access_token');
			}
		}
	});

	if (user) {
		return (
			<div className={position.iheader}>
				<header className={styles.header}>
					<div className={styles.logo}>
						<Link href="/" passHref>
							<Image src={Logop} alt="Logo de la pagina" />
						</Link>
					</div>
					<nav className={styles.navBar}>
						<div onClick={
							() => {
								window.location.href = `
									${auth0.domain}/v2/logout?
									client_id=${auth0.client_id}&
									returnTo=${auth0.redirect_uri}
								`;
								localStorage.removeItem('access_token');
							}
						} className={styles2.login_button}>Logout</div>

						<div className={styles2.img_container}>
							<Image
								src={user.picture || 'https://via.placeholder.com/150'}
								width= {40}
								height= {40}
								className={styles2.img_avatar}
								alt={user.name || ''}
							/>
						</div>
					</nav>
				</header>
			</div>
		);
	}

	return (
		<div className={position.iheader}>
			<header className={styles.header}>
				<div className={styles.logo}></div>
				<nav className={styles.navBar}>
					<div onClick={
						() => {
							window.location.href = `
								${auth0.domain}/authorize?
								response_type=${auth0.response_type}&
								client_id=${auth0.client_id}&
								scope=openid%20profile%20email&
								redirect_uri=${auth0.redirect_uri}
							`;
						}
					} className={styles2.login_button}>Login</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;
