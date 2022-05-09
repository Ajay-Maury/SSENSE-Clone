
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
 

    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

 

  const onChangeInput = (e) => {
    // console.log(e.target)
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleRegister =(e)=>{
  e.preventDefault();
  axios.post("https://ssense-api.herokuapp.com/register",user
    // name: user.name,
    // mobilee: user.mobilee,
    // email: user.email,
    // password: user.password,
  ).then((res)=>{
    setTimeout(()=>{
      Navigate("/login");
    },3000);
    setUser({
      name: "",
      mobile: "",
      email: "",
      password: "",
    }); 
       alert("Signup Successfull !!!")
     
    

  }).catch((e)=>{
    console.log("e",e);
    alert("pls enter 8 digit password")
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
        w={isLargerThan992 ? "30%" : "70%"}
        h="420px"
        margin="auto"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        borderRadius="lg"
        p={"3"}
        cursor="pointer"
        mt={5}
      >
        {/* First name..................... */}
        <FormLabel htmlFor="text">Name</FormLabel>
        <Input
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="firstName"
          type="text"
          placeholder="Enter a  name"
          value={user.name}
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        {/* LastName............................ */}
        <FormLabel htmlFor="text">Mobile</FormLabel>
        <Input
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="lastName"
          type="number"
          placeholder="Enter mobile"
          value={user.mobile}
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        {/* Email...................... */}
        <FormLabel htmlFor="email">Email Adress</FormLabel>
        <Input
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="email"
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        {/* Password ................................ */}
       
        <FormLabel htmlFor="text">Password</FormLabel>
        <Input
          type="password"
          id="password"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          placeholder="Enter 8 digit password"
          value={user.password}
          onChange={(e) => {
            onChangeInput(e);
          }}
        />

        <Button
          mt="20px"
          w="100%"
          borderColor="#ccd0d5"
          colorScheme="RGBA(0, 0, 0, 0.92)"
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          transform="scale(0.98)"
          background="#000000"
          width="200px"
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
