import React from 'react'
import { useState } from 'react'
import { Stack, HStack, VStack, Box, StackDivider, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'


const Signup = () => {
    const [show, setShow]= useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, seiPic] = useState()
    const [loading, setLoading]= useState(false)
    const toast= useToast();
    const handleClick = () => setShow(!show)

    const submitHandler=()=>{}

    const postDetails=(pics)=>{
        setLoading(true);
        if(pic===undefined){
            toast({
                title: "Please select a profile picture",
                status:"warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              return; 
          }
          if(pics.type==="image./jpeg" || pics.type==="image/png" ){
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", anem)
          }
    };

    return (
        <div>
            <VStack
                spacing={4}
                align='stretch' color={"white"}>
                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder="Enter your name" onChange={(e)=> setName(e.target.value)} />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                        <Input placeholder="Enter your password" type={show? "text": "password"} onChange={(e)=> setPassword(e.target.value)} />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel> Confirm Password</FormLabel>
                        <InputGroup>
                        <Input placeholder="Enter your confirm password" type={show? "text": "password"} onChange={(e)=> setPassword(e.target.value)} />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        
                    </FormControl>

                    <FormControl id="pic">
                        <FormLabel>Upload your Picture</FormLabel>
                        <Input type="file" 
                        p={1.5} 
                        accept= "image/*" onChange={(e)=> postDetails(e.target.files[0])} />
                    </FormControl>

                    <Button colorScheme="black"
                    width="100%"
                    style={{marginTop:15}}
                    onClick={submitHandler} >SignUp</Button>
        
            </VStack>
        </div>
    )
}

export default Signup
