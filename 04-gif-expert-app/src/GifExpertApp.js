import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {


  // const [categories, setCategories] = useState(['Dragon Ball']);
  const [categories, setCategories] = useState( defaultCategories );
  
  // const handleAdd = () => {

  //   setCategories([...categories, 'HunterXHunter']);
  //   setCategories(cats => [ ...cats, 'HunterXHunter']);
  // };

  return (
		<Fragment>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category, i) => (
					<GifGrid key={category}  category={category} />
				))}
			</ol>
		</Fragment>
	);

};


export default GifExpertApp;