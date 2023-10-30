import React from 'react'
import { Stack, HStack, VStack, Box, StackDivider } from '@chakra-ui/react'

const Signup = () => {
    return (
        <div>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                <Box h='40px' bg='transperant' borderColor={"white"}>
                    
                </Box>
                <Box h='40px' bg='transperant' borderColor={"white"}>
                    2
                </Box>
                <Box h='40px' bg='transperant' borderColor={"white"}>
                    3
                </Box>
            </VStack>
        </div>
    )
}

export default Signup
