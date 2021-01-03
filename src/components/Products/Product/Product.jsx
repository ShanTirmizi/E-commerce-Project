import { Card, CardActions } from '@material-ui/core';
import React from 'react'
import { CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './productStyles';
import './productStyles.css'

const Product = ({product, onAddToCart}) => {
    // const classes = useStyles();
    const regex = /(<([^>]+)>)/ig;
    const description = product.description.replace(regex, ''); 

    return (
        // <Card className={`${classes.root} shan`} >
        //     <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        //     <CardContent>
        //         <div className={classes.cardContent}>
        //             <Typography variant="h5" gutterBottom>
        //                 {product.name}
        //             </Typography>
        //             <Typography variant="h5">
        //                 {product.price.formatted_with_symbol}
        //             </Typography>
        //         </div>
        //         <Typography dangerouslySetInnerHTML={{ __html: product.description} } variant="body2" color="textSecondary" />
        //     </CardContent>
        //     <CardActions disableSpacing className={classes.CardActions}>
        //         <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
        //             <AddShoppingCart />
        //         </IconButton>
        //     </CardActions>
        // </Card>

        <div className="card">
            <img src={product.media.source} alt={product.name} style={{width: '100%'}} className='image' />
            <h1>{product.name}</h1>
            <p className="price">{product.price.formatted_with_symbol}</p>
            <p>{description} </p>
            <p><button onClick={() => onAddToCart(product.id, 1)}>Add to Cart</button></p>
        </div>


    )
}

export default Product;