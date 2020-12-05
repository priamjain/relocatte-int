import React from 'react'
import Appartment from '../Assets/apartment.png'
import Sofa from '../Assets/sofa.png'
import Van from '../Assets/van.png'
import Car from '../Assets/car.png'
import Styles from './Section2.module.css'
export default function Section2() {
	return (
		<div className={Styles.section}>
			<div className={Styles.services}>
				<div>
					<div>
						<img src={Appartment} alt=""/>
						<div>
						Premium Appartments on rent
						</div>
					</div>
					<div>
						<img src={Sofa} alt=""/>
						<div>
						Furniture Rental
						</div>
					</div>
				</div>
				<div>
					<div>
						<img src={Van} alt=""/>
						<div>
						Packers & Movers
						</div>
					</div>
					<div>
						<img src={Car} alt=""/>
						<div>
						Car Rental / Lease
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.wwd}>
				<p className={Styles.wwd_head}>What we do?</p>
				<p className={Styles.wwd_lead}>Complete relocation solution</p>
				<p className={Styles.wwd_lead2}>Move across India anytime anywhere</p>
				<p className={Styles.wwd_body}>Moving to a new city is a BIG decision. It is even more Stressful when you relocate for work. Given the absolute Jigsaw puzzle that moving and starting a new job can be, here’s one thing you can be sure of, a reliable relocation assistant!</p>
				<button className={Styles.button}>Know more</button>
			</div>
		</div>
	)
}