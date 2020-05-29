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
    <div className="home-panel" style={{display: 'flex'}}>
      <Box className="about" paddingRight="40px" paddingTop="20px" paddingLeft="50px">
        <Image src={require("../../src/dpb.png")} alt="Donate Plasma"/>
      </Box>
      <Stack className="description" spacing={4} variantColor="#FEFCBF">
        <Feature
          fontSize="25px"
          variantColor="#FEFCBF"
          title="সেবাটি সম্পর্কে"
          desc={<Text>করোনা আক্রান্ত রোগীর সুস্থ হওয়ার জন্য, করোনা থেকে সুস্থ হয়ে উঠা মানুষের প্লাজমা দেয়া যায়।
          আপনি করোনা থেকে সুস্থ হয়ে উঠলে প্লাজমা দান করুন, এতে হয়তো একটি মানুষের জীবন বাঁচবে। <br/>
          সঙ্কটাপন্ন করোনা রোগীর জন্য প্লাজমা সংগ্রহ করতে পারেন। <br/> <a className="hyperlink" href="https://www.facebook.com/groups/242718390292629/">Donate Plasma Bangladesh ফেইসবুক গ্রুপে</a> জয়েন করুন। 
          যোগাযোগ - 01799858262, 01968643921 <br/> আমাদের মেইল করতে পারেন এই এড্রেসে: donateplasma@gmail.com</Text>}
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