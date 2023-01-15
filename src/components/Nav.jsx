import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure , useColorModeValue, Box, Flex,} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import {FaUserCircle, FaUserFriends} from "react-icons/fa"
import {BsFillCalendarFill , BsFillCartFill} from "react-icons/bs"
const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
  return (
    <Flex boxShadow='md' justifyContent={"space-between"}>
         <Button bg={"white"} onClick={onOpen} mt={2}>
           <AiOutlineMenu size={30}></AiOutlineMenu>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
        {/* <DrawerOverlay /> */}
        <DrawerContent  bg={ useColorModeValue("#214151", "white")}
        color={useColorModeValue("white", "white")}>
          <DrawerHeader borderBottomWidth='1px'>Admin User</DrawerHeader>
          <DrawerBody>
            <p style={{display:"flex"}}><FaUserFriends/>  <Text ml={3}>Users</Text></p>
            <br></br>
            <p style={{display:"flex"}}> <BsFillCalendarFill/> <Text ml={3}> Product</Text></p>
            <br></br>
            <p style={{display:"flex"}}><FaUserFriends/> <Text ml={3}>User Cateogory</Text></p>
            <br></br>
            <p style={{display:"flex"}}> <BsFillCalendarFill/> <Text ml={3}>Product Cateogory</Text></p>
            <br></br>
            <p style={{display:"flex"}}> <BsFillCartFill/> <Text ml={3}>Cart</Text></p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box p={2}>
        <FaUserCircle size="40" ></FaUserCircle>
      </Box>
    </Flex>
  )
}

export default Nav