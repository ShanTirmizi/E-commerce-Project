import React from 'react'
import Product from './Product/Product'
import { Grid } from '@material-ui/core'
import useStyles from './productsStyles'
import './productsStyles.css'


const Products = ({products, onAddToCart}) => {;
    // const classes = useStyles()
    return (
        // <main className={classes.content}>
        //     <div className={classes.toolbar}/>
        //     <Grid container justify="center" spacing={4}>
        //         {products.map((product) => {
        //             return (
        //             <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        //                 <Product product={product} onAddToCart={onAddToCart}/>
        //             </Grid>
        //             )
        //         })}
        //     </Grid>
        // </main>
        <div className='container-1'>
            <div className='top-spacing' />
            <div className='sub-container'>
            {products.map((product) => {
                    return (
                    <div key={product.id} className='product'>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;