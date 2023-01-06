import { Box, Card, CardBody, CardFooter, Divider, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { RentalProps } from '../data';
import FormatPrice from '../utility.tsx/FormatPrice';
import { AiFillCar } from "react-icons/ai";
import { GiDeskLamp } from "react-icons/gi";
import { HiHashtag } from "react-icons/hi";


const RentCard:React.FC<RentalProps> = ({id, img, street, price, paymentPlan, type}) => {
    const [pageNumber, pageNumberSet] = useState(0);
    const userPage = 6;
    const pageVisited = pageNumber * userPage;
     
  return (
    <Box mt={'2rem'}>
        <Card maxW='300px' >
          <CardBody >
            <Image 
                w='300px'
                h='200px'
                src={img}
                alt='rentals-img'
                borderRadius='lg'
            />
            <Stack mt='2' spacing='1'>
                <Heading size='md'>{street}</Heading>
                <Text color={'gray'}>{type}</Text>
                <Text color='red' fontSize='2xl' >
                    ${FormatPrice(price)}/{paymentPlan}
                </Text>
            </Stack>
          </CardBody>
          <Divider />
            <CardFooter m='1' p='1'>
               <HStack justify={'space-evenly'} w='200px'>
               <HStack spacing={1}>
                <AiFillCar />
                <Text>4</Text>
                </HStack>

                <HStack spacing={1}>
                <GiDeskLamp />
                <Text>2</Text>
                </HStack>
               </HStack>
               
               <HStack spacing={1}>
                <HiHashtag />
                <Text>2</Text>
                </HStack>
            </CardFooter>
    </Card>
    </Box>
  )
}

export default RentCard
