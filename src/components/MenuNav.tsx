import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MenuNav = () => {
  return (
<Box >
    <Menu >
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<AiOutlineMenu />}
            variant='outline'
            color={'blue'}
        />
            <MenuList  minW={'50vw'} fontSize={'2xl'} p={2} bg={'blackAlpha.700'} color='blue'> 
                <MenuItem  >
                    <HashLink smooth to="/#home">
                    Home
                    </HashLink>
                </MenuItem>
                <MenuItem >
                    <HashLink smooth to="/#landlord">
                    Landlord
                    </HashLink>
                </MenuItem>
                <MenuItem >
                    <HashLink smooth to="/#tenants">
                    Tenants
                    </HashLink>
                </MenuItem>
                <MenuItem >
                    <HashLink smooth to="/#contact">
                    Contact Us
                    </HashLink>  
                </MenuItem> 
            </MenuList>
    </Menu>
</Box>
  )
}

export default MenuNav
