import React from 'react'
import { useState } from 'react'
import { Stack, HStack, VStack, Box, StackDivider, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleClick = () => setShow(!show)

  const submitHandler = () => { }
  return (
    <div>
      <VStack
        spacing={4}
        align='stretch' color={"white"}>
         <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)} />
                    </FormControl>



        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input placeholder="Enter your password" type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

        </FormControl>


        <Button colorScheme="white"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}>LogIn</Button>


        <Button colorScheme="white"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={()=>{
            setEmail("guest@example.com")
            setPassword("12345678")
          }}
        >Get Guest User Credentials</Button>

      </VStack>
    </div>
  )
}

export default Login
