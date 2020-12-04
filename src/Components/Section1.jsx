import React from 'react'
import Styles from './Section1.module.css'
import Img1 from '../Assets/img1.png'
import Img2 from '../Assets/img2.png'
import Img3 from '../Assets/img3.png'
import Img4 from '../Assets/img4.png'
function Section1() {
	return (
		<div className={Styles.section}>
			<div className={Styles.element} style={{background:'#FD8383'}}>
				<img src={Img1} alt=""/>
				<div className={Styles.element_body}>
					<div>Relocation Solution</div>
					<div className={Styles.element_for}>For Expats</div>
				</div>
			</div>
			<div className={Styles.element} style={{background:'#4E8DB5'}}>
				<img src={Img2} alt=""/>
				<div className={Styles.element_body}>
					<div>Relocation Solution</div>
					<div className={Styles.element_for}>For Companies</div>
				</div>
			</div>
			<div className={Styles.element} style={{background:'#D8C4B5'}}>
				<img src={Img3} alt=""/>
				<div className={Styles.element_body}>
					<div>Relocation Solution</div>
					<div className={Styles.element_for}>For Individuals</div>
				</div>
			</div>
			<div className={Styles.element} style={{background:'#F0A645'}}>
				<img src={Img4} alt=""/>
				<div className={Styles.element_body}>
					<div>Relocation Solution</div>
					<div className={Styles.element_for}>For Property Owners</div>
				</div>
			</div>
		</div>
	)
}

export default Section1