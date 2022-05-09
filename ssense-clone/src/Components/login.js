import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormHelperText,
  Button,
  Flex,
  useMediaQuery,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLogin } from "../Redux/action";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
export const Login = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  // add....................
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    // console.log(e.target)
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    // console.log("user",user)
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ssense-api.herokuapp.com/login", user
        // email: user.email,
        // password: user.password,
      )
      .then((res) => {
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        console.log("data",res.data)
        dispatch(isLogin(res.data));
        setTimeout(() => {
          Navigate("/");
        }, 1000);
        setUser({
          email: "",
          password: "",
        });
        
      })
      .catch((e) => {
       
      alert("Login Failed !!!")
         
        Navigate("/register");
      });
  };
  return (
    <div className="login">
      { console.log("user",user)}
      
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
          <Heading mt="10" as="h2" size="lg">
            LogIn
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            h="270px"
            margin="auto"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
          >
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
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              focusBorderColor="RGBA(0, 0, 0, 0.64)"
              placeholder="Enter password"
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
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </Button>

            {/* <div>or</div>
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
              //  onClick={
              // window.location.href = "./register"

              //  }
            >
              Signup
            </Button> */}
          </FormControl>
        </Flex>
      
    </div>
  );
};
