import React from 'react'
import { useState } from 'react'
import { Stack, HStack, VStack, Box, StackDivider, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, useToast, position } from '@chakra-ui/react'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'

const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const toast = useToast();
    // const history = useHistory();
    const handleClick = () => setShow(!show)



   const submitHandler = async() => {
    setLoading(true);
    if(!name|| !email || !password || !confirmpassword){
        toast({
            title: "Error",
            description:"All fields are required.",
            status:'warning',
            isClosable:'true',
            position:"bottom",
        });
        setLoading(false);
        return;
    }
    if(password !== confirmpassword){
        toast({
            title: "Error",
            description:"Passwords do not match.",
            status:'error',
    });
    return
  };
  try{
    const config ={
        headers:{
            "Content-typt": "application/json",
        },
        };
        const {data} = await axios.post("/api/user", {name,email,password,pic},
        config
        );
        toast({
            title: "Registration Successful",
            status:'success',
            duration:5000,
            isClosable: true,
            position:"bottom-right",
        });
        localStorage.setItem('userInfo', JSON.stringify(data));

        setLoading(false);
        history.push('/chats')

  }catch(error) {
    toast({
        title: "Error",
      description:`${error.message}.`,
      status:'error',
      duration:5000,
      isClosable:true,
      position:"bottom"
    });
    setLoading(false)
  }
};


    const postDetails = (pics) => {
        setLoading(true);
        if (pic === undefined) {
            toast({
                title: "Please select a profile picture",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "dzwxkh8gm");
            fetch("https://api.cloudinary.com/v1_1/dzwxkh8gm", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
        } else {
            toast({
                title: "Invalid file format! Please upload an image.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
            return;
        }
    }

    return (
        <div>
            <VStack spacing={4} align='stretch' color="white">
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            placeholder="Enter your password"
                            type={show ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id="confirmpassword" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                        <Input
                            placeholder="Enter your confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                </FormControl>


                <FormControl id="pic">
                    <FormLabel>Upload your Picture</FormLabel>
                    <Input type="file" p={1.5} accept="image/*" onChange={(e) => postDetails(e.target.files[0])} />
                </FormControl>

                <Button colorScheme="black" width="100%" style={{ marginTop: 15 }} onClick={submitHandler}
                    isLoading={loading} >
                    SignUp
                </Button>
            </VStack>

        </div>
    )
    }



export default Signup
