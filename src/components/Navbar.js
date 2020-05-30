import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/core";
import React, { Component, useContext, useState, useEffect} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/core";
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';
import { AuthContext }  from './App'

const Navbar = () => {
   
    const history = useHistory();

    return (
        <Breadcrumb className="navbar" bg="#FEFCBF" width="100%" height="100px" spacing="34px" separator="">
            <BreadcrumbItem>
                <BreadcrumbLink isCurrentPage className="link" color="#5F370E" as={Link} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink isCurrentPage className="link" color="#5F370E" as={Link} to='/donors'>Find a donor</BreadcrumbLink>
            </BreadcrumbItem>

            <Button variantColor="yellow">
                <BreadcrumbLink isCurrentPage className="link" color="" as={Link} to='/donateplasma'>Donate Plasma</BreadcrumbLink>
            </Button>


        </Breadcrumb>              
    )
    
}
  
  export default withRouter(Navbar)