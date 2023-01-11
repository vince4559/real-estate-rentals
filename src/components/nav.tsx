import { Flex, HStack, Image } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png'
import MenuNav from './MenuNav';

const nav = () => {
return (
<nav>
    <HStack maxW={'90vw'} py={3}  borderBottom={'1px'} 
        borderColor='white' mx='auto' px={'1rem'} color='white'
    >

            <Flex justify={'flex-start'} align='center' >
                <Image alt='logo' src={logo} w={'150px'} />
            </Flex>

            <Flex w={'100%'} justify={'center'} align='center' gap={'3rem'} 
            display={['none', 'none', 'flex', 'flex']}
            >
            
            <Flex   _hover={{borderBottom:'2px', color:'white'}}>
            <HashLink smooth to="/#home">
                Home
            </HashLink>
            </Flex>

            <Flex _hover={{borderBottom:'2px', color:'white', }}>    
            <HashLink smooth to="/#landlord">
                Landlord
            </HashLink>
            </Flex>

        
            <Flex _hover={{borderBottom:'2px', color:'white'}}>
            <HashLink smooth to="/#tenants">
                Tenants
            </HashLink>
            </Flex>

            <Flex _hover={{borderBottom:'2px', color:'white'}}>
            <HashLink smooth to="/#contact">
                Contact Us
            </HashLink>   
            </Flex>
        </Flex >   
            <Flex align={'center'} justify={'flex-end'}
            display={['flex', 'flex','none', 'none']} w='100%'>
                <MenuNav />
            </Flex>
    </HStack>
</nav>
)
}

export default nav
