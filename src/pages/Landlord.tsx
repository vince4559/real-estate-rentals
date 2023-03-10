import { Heading, HStack, Text, Box, Button, Stack, Flex, Card, CardBody, CardFooter, Divider, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { GiDeskLamp } from 'react-icons/gi'
import { HiHashtag } from 'react-icons/hi'
import ReactPaginate from 'react-paginate'
import { RentalData } from '../data'
import FormatPrice from '../utility.tsx/FormatPrice'

const Landlord = () => {
  const [pageNumber, pageNumberSet] = useState<number>(0);
  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;
  const displayUsers = RentalData.slice(pageVisited, pageVisited + userPerPage).map((rent) => {
    return (
      <Flex mb={'2rem'} key={rent.id}  >
       <Card maxW='280px' >
          <CardBody >
            <Image 
                w='300px'
                h='200px'
                src={rent?.img}
                alt='rentals-img'
                borderRadius='lg'
                loading='lazy'
            />
            <Stack mt='2' spacing='1'>
                <Heading size='md'>{rent.street}</Heading>
                <Text color={'gray'}>{rent.type}</Text>
                <Text color='red' fontSize='2xl' >
                    ${FormatPrice(rent.price)}/{rent.paymentPlan}
                </Text>
            </Stack>
          </CardBody>
          <Divider  borderColor='gray.600' />
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
      </Flex>
    )
  })
  const pageCount = Math.ceil((RentalData.length)/ userPerPage);
  const changePage = ({selected}:any) => {
    pageNumberSet(selected)
    window.scroll(0, 1300)
  }
  return (
   <section id="landlord" >
    <Box p={'3rem'} px='3rem' bg={'blackAlpha.100'} py={'2rem'} >
      <HStack justify={'space-between'} gap={4}> 
        <Heading pl={2} size='md'>
          <Text borderBottom={'2px'} borderColor="red" display='inline'>
            List</Text> of Properties
        </Heading>

        <Button size={['xm', 'md', 'lg', 'lg']} colorScheme={'red'} w={['full','full','fit-content','fit-content']}>
          View All Property
        </Button>
      </HStack>
       <Flex justify={'space-around'} mt='3rem' px='2rem' gap={4} wrap='wrap'>
       {displayUsers}
       </Flex>
       <ReactPaginate 
       pageCount={pageCount}
       previousLabel ={'Previous'}
       nextLabel={'Next'}
       onPageChange={changePage}
       containerClassName={'paginationBttns'}
      renderOnZeroPageCount={undefined}
       activeClassName={'paginationActive'}
       />
    </Box>
   </section>
  )
}

export default Landlord
