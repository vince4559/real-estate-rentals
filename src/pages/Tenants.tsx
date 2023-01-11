import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import tent from '../assets/tent.jpg'

const Tenants = () => {
  return (
    <section id='tenants'>
          <Box p='3rem' px={'2rem'}>
          <Grid templateColumns='repeat(2, 1fr)' gap={3} >
            <GridItem colSpan={[2,2,1,1]} >
              <VStack>
              <Image alt='tenat_img' src={tent} w='300px' />
              </VStack>
            </GridItem>

            <GridItem colSpan={[2,2,1,1]}>
            <VStack spacing={5} mt={['3rem','3rem','4rem','6rem']}>
            <Heading w={['100%','100%','100%','70%']} size={['lg']}>
              Flexibility and options <br /> to suit your lifestyle.
              </Heading>
              <Text w={['100%','100%','70%','70%']}>
              You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
              </Text>          
            </VStack>
            <Flex justify={'flex-start'} w='70%' ml={'5.4rem'} mt='1rem'>
                <Button colorScheme={'red'}>
                  Search Rooms
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
    </section>
  )
}

export default Tenants
