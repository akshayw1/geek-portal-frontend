'use client'

import React, { useState } from 'react'
import { Box } from '@chakra-ui/react';

import { BsSearch } from 'react-icons/bs'; 

export default function test() { 
	const productList = ["blue pant"
		, "black pant"
		, "blue shirt"
		, "black shoes"
		, "brown shoes"
		, "white pant"
		, "white shoes"
		, "red shirt"
		, "gray pant"
		, "white shirt"
		, "golden shoes"
		, "dark pant"
		, "pink shirt"
		, "yellow pant"]; 
    const emptyArr=[];
	const [products, setProducts] = useState(emptyArr); 
	const [searchVal, setSearchVal] = useState(); 
	function handleSearchClick() { 
		if (searchVal === "") { setProducts(productList); return; } 
		const filterBySearch = productList.filter((item) => { 
			if (item.toLowerCase() 
				.includes(searchVal.toLowerCase())) { return item; } 
		}) 
		setProducts(filterBySearch); 
	} 
	

	return ( 
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
		<div> 
			<div> 
				<input onChange={e => setSearchVal(e.target.value)}> 
				</input> 
				<BsSearch onClick={handleSearchClick} /> 
			</div> 
			<div> 

				{products.map((product) => { 
					return ( 
						<div >{product}</div> 
					) 
				}) 
				} 

			</div> 
		</div> 
    </Box>
	); 
} 
