import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import useStyles from './NavbarStyles';


const Navbar = () => {
    const classes = useStyles();
    return (
        <div>

            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Gadget" height='25px' className={classes.image} />
                        Gadget
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart /> 
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar;
