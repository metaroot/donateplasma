import React, { Component, useContext } from 'react';
import '../styles/Donors.css';
import { Text } from "@chakra-ui/core";
import  Navbar from './Navbar'
import { Stack, Box, Heading } from "@chakra-ui/core";
import { useHistory, withRouter } from "react-router-dom";
import AuthContext from './App'
import { Image } from "@chakra-ui/core";
import { findByLabelText } from '@testing-library/react';


function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest} bg="#FFFFF0">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
  
function StackEx() {
  return (
    <div className="home-panel" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      
      <Stack className="description" spacing={4} variantColor="#FEFCBF">
        <Feature
          fontSize="25px"
          variantColor="#FEFCBF"
          title="সেবাটি সম্পর্কে"
          desc={<Text>ডোনার পেতে কল করুন 01799858262, 01968643921 নম্বরে।<br/> এবং যোগ দিন আমাদের <a className="hyperlink" href="https://www.facebook.com/groups/242718390292629/">ফেসবুক গ্রুপে</a></Text>}
        />
      </Stack>
    </div>
  );
}
  

const PatientHome = ({history}) => {
  return (
      <>
        <Navbar/>
        <StackEx/>
      </>
  )
}

export default withRouter(PatientHome)