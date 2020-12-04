import React from 'react'
import Styles from './Search.module.css'
function Search() {
	return (
		<div className={Styles.search}>
			<h1 className={Styles.heading}>You Select a city, we make it your home</h1>
			<div className={Styles.options}>
				<div className={Styles.active}>Appartment Rental</div>
				<div>Company Relocation</div>
			</div>
			<div className={Styles.content}>
				<input type="text" name="cityname" list="cityname" placeholder="Which city are you relocating to?"/>
			    <datalist id="cityname">
			      <option value="Gurgaon"/>
			      <option value="Delhi"/>
			      <option value="Bangalore"/>
			      <option value="Chennai"/>
			      <option value="Neemrana"/>
			      <option value="Manesar"/>
			    </datalist>
			    <input type="text" name="duration" list="duration" placeholder="For how long?"/>
			    <datalist id="duration">
			      <option value="Very Short Stay"/>
			      <option value="Short Stay"/>
			      <option value="Long Stay"/>
			    </datalist>
			    <button>
			    	Search
			    </button>
		    </div>
		</div>
	)
}

export default Search