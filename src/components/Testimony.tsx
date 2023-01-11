import { Box, Grid, GridItem, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import customer from '../assets/customer.jpg'

import estatevideo from '../assets/video/estate.mp4'


const Testimony = () => {
  return (
    <section>
        <Box  p='2rem' px='2rem' bg='orange.50' >
        <Heading size={'md'} p={3}>Testimonials</Heading>
        <Grid templateColumns='repeat(2, 1fr)' >
            <GridItem colSpan={[2,2,1,1]}>
                <Box w={['100%','100%','80%','80%']} mx={'auto'} p={2} mt={['1rem','1rem','1rem','5rem']} >
                    <Text >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </Text>
                    <HStack mt={4}>
                        <Image alt='customer' src={customer} w='50px' rounded={'full'} />
                        <Stack spacing={0}>
                        <Text color={'red'} fontWeight='bold'>Hary Wilson</Text>
                        <Text>Property Owner</Text>
                        </Stack>
                    </HStack>
                    <HStack>
                    <Heading fontWeight={'bold'} color='red'>.</Heading>
                    <Heading fontWeight={'bold'} color='gray'>.</Heading>
                    <Heading fontWeight={'bold'} color='gray'>.</Heading>
                    </HStack>
                </Box>
            </GridItem>
            <GridItem colSpan={[2,2,1,1]}>
                <Box p={2} mt={4}>
                <video  width='450px' height='320px' loop controls >
                        <source src={estatevideo} 
                        type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' 
                        />
                </video>
                </Box>
            </GridItem>
        </Grid>
        </Box>
    </section>
  )
}

export default Testimony
