import React, { Component, useState } from "react";
import { Grommet, Box, Grid } from "grommet";
import { Heading } from "grommet";

import classes from './Category.module.css';
import { Sidebar } from "grommet";
import Category from "./Category";


const CategoryItem = ({key, category, title, tag, checkedItemHandler}) => {
	
	return (
		<li>
			<form className={classes.category__box}>
				<Heading level={4} className={classes.category__title}>{title}</Heading>
				{tag.map((item,index) => (

					<CategoryTag key={item} tag = {item} category = {category} checkedItemHandler={checkedItemHandler}></CategoryTag>
				))}
			</form>
		</li>
	);
}

const CategoryTag = ({key, tag, category, checkedItemHandler}) =>{
	const [bChecked, setChecked] = useState(false);
	// console.log(category);
	const checkHandler = ({target}) =>{
		setChecked(!bChecked);
		// console.log(tag);
		// console.log(target.checked);
		checkedItemHandler(tag, category, target.checked);
	}

	return(
		<label className={classes.tag} >
						<input type="checkbox" checked={bChecked} onChange={(e)=>{checkHandler(e);}}/>
						{tag}
					</label>
	);

}
export default CategoryItem;