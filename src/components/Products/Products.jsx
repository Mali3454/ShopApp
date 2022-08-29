import React from 'react'
import { Grid } from '@mui/material'

import Product from './Product/Product'

const products = [
	{
		id: 1,
		name: 'Shoes1',
		description: 'Running shoes',
		price: '$5',
		image:
			'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/9a49fe337b8c2c17feeb259ddaf610ee.jpg',
	},
	{
		id: 2,
		name: 'Shoes2',
		description: 'Running shoes',
		price: '$10',
		image:
			'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/ead0d8d24be04f0fdf9fe33055ca0cee.jpg',
	},
]

const Products = () => {
	return (
		<main>
			<Grid container justifyContent='center' alignItems='center' spacing={4}>
				{products.map(product => (
					<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	)
}

export default Products
