import { Box, Grid, GridItem, Heading, Image, VStack,FormControl, Select, HStack, IconButton } from '@chakra-ui/react';
import home from '../assets/home.jpg'
import map from '../assets/map.jpg'
import Nav from '../components/nav';
import { AiOutlineSearch } from "react-icons/ai";



const Home = () => {
  return (
   <Box minW='100vw' minH={'100vh'} bgImage={home} bgRepeat='no-repeat' bgPos={'center'} 
   bgSize={'cover'} bgColor='blackAlpha.600' bgBlendMode={'color-dodge'}>
    <Nav />
   <Grid templateColumns='repeat(2, 1fr)' mt={['3em', '3rem', 0, 0]} gap={5}>
    <GridItem colSpan={[2,2,1,1]} w='100%'  ml={[0, 0, '4rem', '4rem']}>
      <Heading size={['xl', 'xl', '2xl', '2xl']} lineHeight={'3rem'} color={'white'} 
          position={['relative','relative','absolute','absolute']} 
          top={[0, 0,'13rem','13rem']} textAlign={'center'}>
          The Most Affortable <br/> Place To Stay In The <br/>San Franciso Bay Area 
      </Heading>
    </GridItem>

    <GridItem colSpan={[2,2,1,1]} w={'100%'} mt={'3rem'}>
        <VStack mt={'2rem'} w='100%'>
          <Image alt='map' src={map} w={['300px','300px','350px','350px']} rounded={'3xl'} mb={3} />
          <HStack spacing={1} bg={'white'} p={4} rounded={'2xl'} w={['80%', '80%', '60%','60%']}>
          <FormControl w={'80%'}>
          <Select size={'lg'} variant='outline'>
           <option style={{color:'white', backgroundColor:'white'}}>All types</option>
           </Select>
          </FormControl>
         
          <FormControl w={'100%'}>
          <Select size={'lg'} variant='outline' >
           <option style={{color:'white', backgroundColor:'white'}}>Neigborhood</option>
           </Select>
          </FormControl>
             <IconButton w={'120px'} icon={<AiOutlineSearch />}
             aria-label='button' size={'lg'} colorScheme='blue'  />
          </HStack>
        </VStack>
      </GridItem>
   </Grid>
   </Box>
  )
}

export default Home
