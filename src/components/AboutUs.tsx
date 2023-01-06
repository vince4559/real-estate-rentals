import { Box, Grid, GridItem, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import about from '../assets/about.jpg'
import vector from '../assets/vector.png'
import vector1 from '../assets/Vector (1).png'
import vector2 from '../assets/Vector (2).png'
import vector3 from '../assets/Vector (3).png'
import vector4 from '../assets/Vector (4).png'
import vector5 from '../assets/Vector (5).png'

const AboutUs = () => {
  return (
    <section>
        <Box py={'3rem'} px={'2rem'} bg='white'>
            <Heading textTransform={'capitalize'} size={'lg'} mb={2} textAlign='center' >
           <Text display={'inline'} borderBottom={'2px'} borderColor={'red'}>
            minimum living cost 
            </Text>  takes care of everything
            </Heading>

            <Grid templateColumns='repeat(3, 1fr)' mt={['.5rem','1rem','3rem','3rem']}>
                <GridItem colSpan={[3,3,1,1]}>
                    <VStack>
                        <Image alt="about-image" src={about} w='300px' h={'400px'} />
                    </VStack>
                </GridItem>

                <GridItem colSpan={[3,3,2,2]} mt={['1rem','2rem','4rem','4rem']}>
                    <Stack spacing={'4rem'} p={'.5rem'}>
                    <HStack w='100%' textAlign={'center'} spacing={4}>
                        <VStack>
                            <Image alt='$-icon' src={vector} w={'35px'} />
                            <Text>Pay as Little as possible!</Text>
                        </VStack>
                        <VStack>
                            <Image alt='$-icon' src={vector1} w={'33px'} />
                            <Text>Enjoy wisdom of community!</Text>
                        </VStack>
                        <VStack>
                            <Image alt='$-icon' src={vector2} w={'33px'} />
                            <Text>Let's somebody else take care of Landlord!</Text>
                        </VStack>
                    </HStack>

                    <HStack w='100%' textAlign={'center'} spacing={4}>
                        <VStack>
                            <Image alt='$-icon' src={vector3} w={'33px'} />
                            <Text>Pay as Little as possible!</Text>
                        </VStack>
                        <VStack>
                            <Image alt='$-icon' src={vector4} w={'33px'} />
                            <Text>Enjoy wisdom of community!</Text>
                        </VStack>
                        <VStack>
                            <Image alt='$-icon' src={vector5} w={'33px'} />
                            <Text>Let's somebody else take care of Landlord!</Text>
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
