import { Flex, HStack, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import MenuNav from './MenuNav';

const nav = () => {
return (
<nav>
<HStack w={'90vw'} py={3}  borderBottom={'1px'}  bg={'transparent'}
    borderColor='white' mx='auto' px={'1rem'}>
        <Flex justify={'flex-start'} align='center' >
            <Image alt='logo' src={logo} w={'150px'} />
        </Flex>

        <Flex w={'100%'} justify={'center'} align='center' gap={'3rem'} 
        display={['none', 'none', 'flex', 'flex']}
        >
        
        <Flex   _hover={{borderBottom:'2px', color:'white'}}>
        <NavLink to={'/'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'white'}}>
        Home
        </NavLink>
        </Flex>

        <Flex _hover={{borderBottom:'2px', color:'white', }}>
        <NavLink to={'/landlord'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'white'}}>
        Landlord
        </NavLink>
        </Flex>
    
        <Flex _hover={{borderBottom:'2px', color:'white'}}>
        <NavLink to={'/tenants'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'white'}}>
        Tenants
        </NavLink>
        </Flex>

        <Flex _hover={{borderBottom:'2px', color:'white'}}>
            <NavLink to={'/contact'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'white'}}>
            Contact Us
            </NavLink>    
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
