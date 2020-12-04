import Styles from './Footer.module.css'
import React from 'react'
import Logo from '../Assets/logo.png'
function Footer() {
	return (
		<div className={Styles.footer_section}>
			<div className={Styles.footer1}>
				<div className={Styles.aboutus}>
					<img src={Logo} alt=""/>
					<div>Relocatte provides beautifully furnished and managed apartments in premium condominiums. Global travelers prefer to rent and stay in our homes when they relocate to Indian business cities.</div>
				</div>
				<div className={Styles.col2}>
					<div className={Styles.company}>
						<ul>
							<p className={Styles.footer1_header}>COMPANY</p>
							<li>About Us</li>
							<li>For Companies</li>
							<li>For Property Owners</li>
							<li>Terms & Conditions</li>
							<li>Careers</li>
							<li>Blogs</li>
						</ul>
					</div>
					<div>
						<p className={Styles.footer1_header}>CONTACT</p>
						<div>
							<div>1777, Sector 45</div>
							<div>Gurgaon India 122002</div>
							<a href="tel:+91-9999 88 9696">+91-9999 88 9696</a><br/>
							<a href="mailto:info@relocatte.com">info@relocatte.com</a>
						</div>						
					</div>
				</div>
				<div>
					<p className={Styles.footer1_header}>Follow Us</p>
					<div className={Styles.follow}>
						<div>fb</div>
						<div>Tw</div>
						<div>ins</div>
						<div>lin</div>
					</div>
				</div>		
			</div>
			<hr/>
			<div className={Styles.section2}>

			</div>
		</div>
	)
}

export default Footer