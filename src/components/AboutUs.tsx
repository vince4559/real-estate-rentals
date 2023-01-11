import { Box, Grid, GridItem, Heading, HStack, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import about from '../assets/about.jpg'
import { AiOutlineDollarCircle, AiTwotoneHome } from "react-icons/ai";
import {BsStack, BsBookmarkStarFill, } from "react-icons/bs";
import {GiCrystalGrowth, } from "react-icons/gi";
import {GiMoonClaws, } from "react-icons/gi";


const AboutUs = () => {
  return (
    <section>
        <Box py={'3rem'} px={'2rem'} bg='white'>
            <Heading textTransform={'capitalize'} size={'lg'} mb={2} textAlign='center' >
           <Text display={'inline'} borderBottom={'2px'} borderColor={'red'}>
            minimum living cost 
            </Text>  takes care of everything
            </Heading>

            <Grid templateColumns='repeat(3, 1fr)' gap={4} mt={['.5rem','1rem','1rem','3rem']}>
                <GridItem colSpan={[3,3,1,1]}>
                    <VStack>
                        <Image alt="about-image" src={about} w='300px' h={'400px'} />
                    </VStack>
                </GridItem>

                <GridItem colSpan={[3,3,2,2]} mt={['1rem','2rem','2rem','4rem']} gap={4}>
                    <Stack spacing={'4rem'}  >
                    <HStack w='100%' textAlign={'center'} justify='space-evenly' >
                        <VStack>
                           <Icon as={AiOutlineDollarCircle} color='red' fontSize='3xl'/>
                            <Text>Pay as Little <br/> as possible!</Text>
                        </VStack>
                        <VStack>
                           <Icon as={AiTwotoneHome} color='red' fontSize='3xl'/>
                            <Text>Enjoy wisdom <br/> of community!</Text>
                        </VStack>
                        <VStack>
                            <Icon as={BsStack} color='red' fontSize='3xl'/>
                            <Text>Let's somebody else <br/> take care of Landlord!</Text>
                        </VStack>
                    </HStack>

                    <HStack w='100%' textAlign={'center'} justify='space-evenly'>
                        <VStack>
                            <Icon as={GiCrystalGrowth} color='red' fontSize='3xl'/>
                            <Text>Enjoy peaceful <br/> Environment!</Text>
                        </VStack>
                        <VStack>
                            <Icon as={BsBookmarkStarFill} color='red' fontSize='3xl'/>
                            <Text>Stay Safe! <br/> Save Money!</Text>
                        </VStack>
                        <VStack>
                            <Icon as={GiMoonClaws} color='red' fontSize='3xl'/>
                            <Text>Pay for what <br/> you use!</Text>
                        </VStack>
                    </HStack>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    </section>
  )
}

export default AboutUs
