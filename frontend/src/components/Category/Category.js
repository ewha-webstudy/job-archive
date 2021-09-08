import React, { Component, useState, useEffect, useSelector} from "react";
import { Grommet, Box, Grid } from "grommet";
import { Heading } from "grommet";
import { useDispatch } from "react-redux";

import classes from './Category.module.css';
import { Sidebar } from "grommet";
import CategoryItem from "./CategoryItem";
import API from "../../utils/api";
import {addTag, removeTag} from "../../modules/tagchecker";


const Category= ({categoryList, category_chg, searchBar})=> {
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
			category: 'enterTpCd',
			set: new Set()
		},
		{
			id: 3,
			category: 'region',
			set: new Set()
		},
		{
			id: 4,
			category: 'avgSal',
			set: new Set()
		},
		{
			id: 5,
			category: 'minEdubgIcd',
			set: new Set()
		}
	]);

	const dispatch = useDispatch();

  // 토큰 전달
  const _addTag = () => dispatch(addTag());
	const _removeTag = () => dispatch(removeTag());

	function apiPostTag(){
		function apiSendTag(props){
			return Array.from(checkedItems.find(element => element.category === props).set);
		}

		return(
			API.post(`api/category/${category_chg}`, {
				tags: {
					techStack: apiSendTag('techStack'),
					enterTpCd: apiSendTag('enterTpCd'),
					avgSal: apiSendTag('avgSal'),
					region: apiSendTag('region'),
					minEdubgIcd: apiSendTag('minEdubgIcd'),
				},
				searchBar: `${searchBar}`
			}).then(res => {
				console.log(res.status);
				setJobs(res.data);
			  })
			  .catch(error => {
				if (error.response.status === 404) {
				  console.error(error);
				}
			  })
		);
	}
	const checkedItemHandler = async(tag, cat, isChecked) => {
		if (cat === 'avgSal') {
			tag = categoryList[2].tag.indexOf(tag);
			console.log(tag);
		}
		const k = checkedItems.find(element => element.category === cat);
		if(isChecked){
			k.set.add(tag);
			setCheckedItems(checkedItems);
			_addTag();
			await apiPostTag();
		}		
		else if (!isChecked && k.set.has(tag)){
			k.set.delete(tag);
			setCheckedItems(checkedItems);
			_removeTag();
			await apiPostTag();
		}
	}

	return (
		<ul className={classes.categoryWrapper}>
				{console.log("searchbar = " + searchBar)}

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