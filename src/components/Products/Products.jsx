import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


// const products = [
//     { id: 1, name: "Nails", description: "Press-On Nails.", price: '$25', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmXACat6bZgt54BGd_HXGfI8CrqjnE1HEGg&usqp=CAU' },
//     { id: 2, name: "Custom Nails", description: "Custom Press-On Nails.", price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQAN9fSM7ZqYQqk7Mu6ohUC9tUsqQt3AF1Q&usqp=CAU' },
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}

            </Grid>
        </main>
    );
}
export default Products;