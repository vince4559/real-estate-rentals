import { Box, Grid, GridItem, Heading, VStack,FormControl, Select, HStack, IconButton } from '@chakra-ui/react';
import home from '../assets/home.jpg'
import Nav from '../components/nav';
import { AiOutlineSearch } from "react-icons/ai";



const Home = () => {
  return (
   <section id='home'>
      <Box minW='100vw' minH={'100vh'} bgImage={home} bgRepeat='no-repeat' bgPos={'center'} 
   bgSize={'cover'} bgColor='blackAlpha.600' bgBlendMode={'color-dodge'}>
    <Nav />
   <Grid templateColumns='repeat(2, 1fr)' mt={['3em', '3rem', 0, 0]} gap={5}>
    <GridItem colSpan={[2,2,1,1]} w='100%'  ml={[0, 0, '4rem', '4rem']}>
      <Heading size={['lg', 'xl', 'xl', '2xl']}  color={'white'}
          mt={['0rem','0rem','4rem','4rem']} 
          position={['relative','relative','absolute','absolute']} 
          top={[0, 0,'10rem','15rem']} textAlign={'center'}>
          The Most Affortable <br/> Place To Stay In The <br/>San Franciso Bay Area 
      </Heading>
    </GridItem>

    <GridItem colSpan={[2,2,2,1]} mt={'3rem'}>
        <VStack mt={['2rem','2rem', '20rem', '2rem' ]}  pb={'3rem'}>
            <Box rounded={'full'}>
            <iframe style={{borderRadius:'10px' , minWidth:"300px", height:"300px" }} 
           id="gmap_canvas" src="https://maps.google.com/maps?q=san%20Francisco%20usa&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </Box>
            
          <HStack spacing={1} bg={'white'} p={4} rounded={'2xl'} 
          w={['80%', '80%', '50%','50%']}>
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
             aria-label='button' size={'lg'} colorScheme='blue' 
           />
          </HStack>
        </VStack>
      </GridItem>
   </Grid>
   </Box>
   </section>
  )
}

export default Home
