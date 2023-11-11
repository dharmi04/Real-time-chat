import React from 'react'
import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Signup from './components/Authencation/Signup'
import Login from './components/Authencation/Login'

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        bg={"transperant"}
        p={3}
        w="100%"
      >
        <Text fontSize="5xl" fontFamily="Work sans" textColor={"white"} fontWeight={"extrabold"} textAlign={"center"} shadow={"md"} textShadow={"md"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="transperant" w="100%" p={4} borderRadius="lg" borderWidth="1px" borderColor={"white"} boxShadow={"2xl"} dropShadow={"2xl"}   >
        <Tabs variant='enclosed'>
          <TabList textColor={"white"} borderColor={"white"} mb={'1'}>
            <Tab width={"50%"}>SignUp</Tab>
            <Tab width={"50%"}>LogIn</Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Signup />   </TabPanel>
            <TabPanel>  <Login/> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
