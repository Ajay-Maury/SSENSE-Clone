
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormHelperText,
  Button,
  Flex,
Spinner,
  useMediaQuery,
  useToast ,
} from "@chakra-ui/react";
import axios from "axios"
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Register = () => {
 
  const Navigate = useNavigate();
  

    
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

 

  const handleChange = (e) => {
    // console.log(e.target)
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleRegister =(e)=>{
  e.preventDefault();
  axios.post("https://ssense-api.herokuapp.com/register",user
    // firstName: user.firstName,
    // lastName: user.lastName,
    // email: user.email,
    // password: user.password,
  ).then((res)=>{
    setTimeout(()=>{
      Navigate("/login");
    },3000);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });  
      alert("Signup Successfull !!!")
     

  }).catch((e)=>{
    console.log("e",e);
    
      alert("Please Enter 8 Digit Password")
     
  })
      
      }
  return (
    <div className="login">
      {console.log("user", user)}
      
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
      <Heading mt="10" as="h2" size="lg">
        Signup
      </Heading>
      <FormControl
       w="400px"
        h="320px"
        margin="auto"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        borderRadius="5px"
        p={"3"}
        cursor="pointer"
        padding="30px"
        mt={5}
      >
        {/* First name..................... */}
        <FormLabel htmlFor="text">First Name</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="firstName"
          type="email"
          placeholder="Enter a first name"
          value={user.firstName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {/* LastName............................ */}
        <FormLabel htmlFor="text">Last Name</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="lastName"
          type="text"
          placeholder="Enter a last name"
          value={user.lastName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {/* Email...................... */}
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="email"
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {/* Password ................................ */}
        
        <FormLabel htmlFor="text">Password</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          type="password"
          id="password"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          placeholder="Enter 8 digit password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <Button
          mt="20px"
          height="40px"
        width="300px"
   
          borderColor="#ccd0d5"
          colorScheme="RGBA(0, 0, 0, 0.92)"
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          transform="scale(0.98)"
          background="#000000"
  
          _hover={{
            bg: "#f5f6f7",
            background: "RGBA(0, 0, 0, 0.80)",
            transform: "scale(0.98)",
          }}
          onClick={(e) => { handleRegister(e)
            }}
        >
          Submit
        </Button>
      </FormControl>
      </Flex>
    
    </div>
  );
};
