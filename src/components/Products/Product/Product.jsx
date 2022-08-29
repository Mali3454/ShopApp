import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import Box from '@mui/material/Box'

const Product = ({ product }) => {
	return (
		<Card sx={{ maxWidth: '100%'}}>
			<CardMedia sx={{ height: 0, pt: 40 }} image={product.image} title={product.name} />
			<CardContent>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography gutterBottom variant='h5'>
						{product.name}
					</Typography>
					<Typography gutterBottom variant='h5'>
						{product.price}
					</Typography>
				</Box>
				<Typography variant='body2' color='textSecondary'>
					{product.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<IconButton aria-label='Add to Cart'>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default Product
