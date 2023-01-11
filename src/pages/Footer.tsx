import { Box, Grid, GridItem, Image, Stack, VStack, Text, HStack, Icon, Link } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaFax } from "react-icons/fa";
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiOutlineGooglePlus, AiOutlineArrowUp } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <Box bg='blackAlpha.300' p='3rem' px={'2rem'}  borderTop={'1px'} borderColor='red'>
        <Grid templateColumns='repeat(2, 1fr)'>
          <GridItem colSpan={[2,2,1,1]}>
            <VStack >
              <Image alt='footer_logo'src={logo} w='150px' />
            </VStack>
          </GridItem>
          <GridItem colSpan={[2,2,1,1]}>
            <Stack spacing={3} mt='1rem' >
            <HStack>
              <Icon as={MdLocationOn} color='red' />
              <Text fontSize={['12px','12px','14px','16px']} >
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </Text>
              </HStack>

              <HStack spacing={['2rem', '4rem', '6rem','8rem']} >
                <HStack>
                  <Icon as={FaFax} color='red' />
                  <Text>(123) 456-7890</Text>
                </HStack>
                  <HStack>
                    <Icon as={IoIosCall} color='red' />
                    <Text>(123) 456-7890</Text>
                  </HStack>
              </HStack>
              
              <HStack spacing={4}>
                <Text color='gray'>Social Media</Text>
                <Icon as={AiFillFacebook} color='red' />
                <Icon as={AiOutlineTwitter} color='red' />
                <Icon as={AiFillLinkedin} color='red' />
                <Icon as={AiFillYoutube} color='red' />
                <Icon as={AiFillInstagram} color='red' />
                <Icon as={AiOutlineGooglePlus} color='red' />
            </HStack>
            </Stack>
          </GridItem>
        </Grid>
        
            <Box mt={'2rem'} p={'1rem'} borderTop='1px' borderColor='gray'>
              <Grid templateColumns='repeat(2, 1fr)'  >
                  <GridItem  colSpan={[2,2,1,1]}>
                      <HStack spacing={2} fontSize={['9px','10x','14px','16px']} mb={'1rem'} >
                        <Link>ABOUT US</Link>
                        <Link>CONTACT US</Link>
                        <Link>HELP</Link>
                        <Link>PRIVACY POLICY</Link>
                        <Link>DISCLAMER</Link>
                    </HStack>
                  </GridItem>
                  <GridItem  colSpan={[2,2,1,1]}>
                    <HStack spacing={4} >
                      <Text  color='gray' fontSize={['10px','12px','13px','16px']}>
                        Copyright © 2020 Minimumlivingcost. All rights reserved
                      </Text>
                      <Link href='#'>
                      <Icon as={AiOutlineArrowUp} />
                      </Link>
                    </HStack>
                  </GridItem>
                </Grid>
            </Box> 
        </Box>
    </footer>
  )
}

export default Footer

