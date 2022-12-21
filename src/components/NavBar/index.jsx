import React from "react";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

function NavBar() {
	return (
		<div className={styles.navbar}>
			<div>
				<img className={styles.logo} src={Logo} alt="Logo SportSee" />
			</div>
			<div>Accueil</div>
			<div>Profil</div>
			<div>Réglage</div>
			<div>Communauté</div>
		</div>
	);
}

export default NavBar;
