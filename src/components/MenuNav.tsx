import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const MenuNav = () => {
  return (
<Box >
    <Menu >
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<AiOutlineMenu />}
            variant='outline'
        />
            <MenuList  minW={'50vw'} fontSize={'2xl'} p={2} bg={'blackAlpha.700'}> 
                <MenuItem  >
                    <NavLink to={'/'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'blue'}}>
                        Home
                    </NavLink>
                </MenuItem>
                <MenuItem >
                    <NavLink to={'/landlord'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'blue'}}>
                        Landlord
                    </NavLink>
                </MenuItem>
                <MenuItem >
                    <NavLink to={'/tenants'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'blue'}}>
                    Tenants
                    </NavLink>
                </MenuItem>
                <MenuItem >
                <NavLink to={'/contact'} style={({isActive}) => isActive? {color:'greenyellow'}: {color:'blue'}}>
                    Contact Us
                </NavLink>  
                </MenuItem> 
            </MenuList>
    </Menu>
</Box>
  )
}

export default MenuNav
