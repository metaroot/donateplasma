import React, { Component, useContext } from 'react';
import '../styles/PatientHome.css';
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
    <div className="home-panel" style={{display: findByLabelText, }}>
      {/* <Box className="about" size="xl">
        <Image src={require("../../src/dpb.png")} alt="Donate Plasma" width="1000px" />
      </Box> */}
      <Stack className="about" spacing={4} variantColor="#FEFCBF">
        <Feature
          fontSize="25px"
          variantColor="#FEFCBF"
          title="সেবাটি সম্পর্কে"
          desc="করোনা আক্রান্ত রোগীর সুস্থ হওয়ার জন্য, করোনা থেকে সুস্থ হয়ে উঠা মানুষের প্লাজমা দেয়া যায়।
          আপনি করোনা থেকে সুস্থ হয়ে উঠলে প্লাজমা দান করুন, এতে হয়তো একটি মানুষের জীবন বাঁচবে। 
          সঙ্কটাপন্ন করোনা রোগীর জন্য প্লাজমা সংগ্রহ করতে পারেন। 
          Donate Plasma Bangladesh ফেইসবুক গ্রুপে জয়েন করুন। 
          যোগাযোগ - 01705475919 , 01750970356 "
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