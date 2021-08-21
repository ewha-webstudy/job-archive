import React, { Component, useState } from "react";
import { Grommet, Box, Grid } from "grommet";
import { Heading } from "grommet";

import classes from './Category.module.css';


function CategoryItem(props) {
	const [checkedItems, setCheckedItems] = useState(new Set());

	const checkedItemHander = (id, isChecked) => {
		if (isChecked) {
			checkedItems.add(id);
			setCheckedItems(checkedItems);
		  } else if (!isChecked && checkedItems.has(id)) {
			checkedItems.delete(id);
			setCheckedItems(checkedItems);
		  }
	}


	return (
		<li>
			<form className={classes.category__box}>
				<Heading level={4} className={classes.category__title}>{props.title}</Heading>
				{props.tag.map((item,index) => (
					// <button className={classes.btn}>{item}</button>
					<label className={classes.tag}>
						<input type="checkbox" value={item} />
						{item}
					</label>
				))}
			</form>
		</li>
	);
}

function Category(props) {
	return (
		<ul className={classes.categoryWrapper}>
			{props.categoryList.map(item =>
				<CategoryItem
					key={item.id}
					title={item.title}
					tag={item.tag}
				/>)}
		</ul>
	);
}

export default Category;