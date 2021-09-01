import React, { Component, useState, useEffect } from "react";
import { Grommet, Box, Grid } from "grommet";
import { Heading } from "grommet";

import classes from './Category.module.css';
import { Sidebar } from "grommet";
import CategoryItem from "./CategoryItem";
import API from "../../utils/api";



const Category= ({categoryList, category_chg})=> {
	const [jobs , setJobs] = useState([]);
  const [error, setError] = useState(null);
	const [checkedItems, setCheckedItems] = useState([
		{
			id: 1,
			category: 'techStack',
			set: new Set()
		},
		{
			id: 2,
			category: 'enterTp',
			set: new Set()
		},
		{
			id: 3,
			category: 'region',
			set: new Set()
		},
		{
			id: 4,
			category: 'salary',
			set: new Set()
		},
		{
			id: 5,
			category: 'edubgIcd',
			set: new Set()
		}
	]);

	const checkedItemHandler = async(tag, cat, isChecked) => {
		const k = checkedItems.find(element => element.category === cat);
		if(isChecked){
			k.set.add(tag);
			setCheckedItems(checkedItems);
			await API.post(`api/category/${category_chg}`, {
				tags: {
					techStack: checkedItems.find(element => element.category === 'techStack').set,
					enterTp: checkedItems.find(element => element.category === 'enterTp').set,
					salary: checkedItems.find(element => element.category === 'salary').set,
					region: checkedItems.find(element => element.category === 'region').set,
					edubgIcd: checkedItems.find(element => element.category === 'edubgIcd').set,
				},
				searchBar: ''
			})
			.then(res => {
				console.log(res.status);
			  })
			  .catch(error => {
				if (error.response.status === 404) {
				  console.error(error);
				}
			  });
		}		
		else if (!isChecked && k.set.has(tag)){
			k.set.delete(tag);
			setCheckedItems(checkedItems);
			await API.post(`api/category/${category_chg}`, {
				tags: {
					techStack: checkedItems.find(element => element.category === 'techStack').set,
					enterTp: checkedItems.find(element => element.category === 'enterTp').set,
					salary: checkedItems.find(element => element.category === 'salary').set,
					region: checkedItems.find(element => element.category === 'region').set,
					edubgIcd: checkedItems.find(element => element.category === 'edubgIcd').set,
				},
				searchBar: ''
			})
			.then(res => {
				console.log(res.status);
			  })
			  .catch(error => {
				if (error.response.status === 404) {
				  console.error(error);
				}
			  });

		}
	}

	return (
		<ul className={classes.categoryWrapper}>
			
			{categoryList.map(item =>
				<CategoryItem
					key={item.id}
					category={item.id}
					title = {item.title}
					tag={item.tag}
					checkedItemHandler={checkedItemHandler}
				/>
				)}
		</ul>
	);
}

export default Category;