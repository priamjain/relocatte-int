import Styles from './Footer.module.css'
import React from 'react'
import Logo from '../Assets/logo.png'
import IN from '../Assets/in.png'
import FB from '../Assets/fb.png'
import Insta from '../Assets/insta.png'
import Twi from '../Assets/twi.png'
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
						<ul className={Styles.ul}>
							<p className={Styles.footer_header}>COMPANY</p>
							<li>About Us</li>
							<li>For Companies</li>
							<li>For Property Owners</li>
							<li>Terms & Conditions</li>
							<li>Careers</li>
							<li>Blogs</li>
						</ul>
					</div>
					<div>
						<p className={Styles.footer_header}>CONTACT</p>
						<div>
							<div>1777, Sector 45</div>
							<div>Gurgaon India 122002</div>
							<a href="tel:+91-9999 88 9696">+91-9999 88 9696</a><br/>
							<a href="mailto:info@relocatte.com">info@relocatte.com</a>
						</div>						
					</div>
				</div>
				<div>
					<p className={Styles.footer_header}>Follow Us</p>
					<div className={Styles.follow}>
						<div><img src={IN} alt=""/></div>
						<div><img src={FB} alt=""/></div>
						<div><img src={Twi} alt=""/></div>
						<div><img src={Insta} alt=""/></div>
					</div>
				</div>		
			</div>
			<div className={Styles.footer2}>
				<p className={Styles.footer_header}>Popular Searches</p>
				<div style={{display:'flex'}}>
				<ul className={Styles.ul}>
					<li>Serviced Apartments in Gurgaon</li>
					<li>Serviced Apartments in Delhi</li>
					<li>Serviced Apartments in Chennai</li>
					<li>Serviced Apartments in Manesar</li>
					<li>Serviced Apartments in Neemrana</li>
					<li>Serviced Apartments in Bangalore</li>
				</ul>
				</div>
			</div>
			<div className={Styles.copyright}>
				© 2020 Relocatte, All Rights Reserved.
			</div>
		</div>
	)
}

export default Footer