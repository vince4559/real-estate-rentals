import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

interface FormProps {
  user_name: string,
  user_address: string,
  user_unit: number,
  user_city: string,
  room_type: string,
  room_price: number,
  description: string
}

const ContactUs = () => {
  const initialData = {
    user_name: '',
  user_address: '',
  user_unit: 0,
  user_city: '',
  room_type: '',
  room_price: 0,
  description: ''
  };
  const [formData, setFormData] = useState<FormProps>(initialData)

  const handleEvent = (event:React.FormEvent) => {
     
  }
  return (
    <Box p='2rem' px={'2rem'} bg='blackAlpha.100'>
      <Heading textAlign={'center'} size={'sm'}>
      Your property with us and be Confident that Your Room will be Filled Out!
      </Heading>

      <Box w='90%' bg={'white'}  mx='auto' my={'2rem'} p='1rem' 
      boxShadow={'dark-lg'} rounded='2xl'>
          <Heading color={'red'} size={'lg'} textAlign='center' py='1rem' mb={'1rem'}>
            Add A New Property
          </Heading>    
          <form>
         <Flex gap={3}  wrap={'wrap'} ml={[]} mb='1rem'>
           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>Name</FormLabel>
              <Input type={'text'} placeholder='Enter Name' name='user_name' />
           </FormControl>
          
           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>Address</FormLabel>
              <Input type={'text'} placeholder='Enter Address' name='user_address' />
           </FormControl>

           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>Unit Number</FormLabel>
              <Input type={'number'} placeholder='Enter Unit' 
              name='user_unit' />
           </FormControl>

           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>City</FormLabel>
           <Select placeholder='select City' name='user_city'>
             </Select>
           </FormControl>
          
           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>State</FormLabel>
             <Select placeholder='select State'>
             </Select>
           </FormControl>

           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>Room Type</FormLabel>
             <Select placeholder='select Room Type'  name='room_type'>
             </Select>
           </FormControl>

           <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>Unit Number</FormLabel>
              <Input type={'number'} placeholder='Enter Price' 
               name='room_price' />
           </FormControl>

           {/* <FormControl isRequired w={['100%','100%','30%','30%']}>
           <FormLabel>Room Type</FormLabel>
             <Select placeholder='select Room Type'>
             </Select>
           </FormControl> */}

           <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='Enter Description' rows={5} name='description' />
           </FormControl>

           <FormControl isRequired>
            <FormLabel>Upload Photos</FormLabel>
            <Input type={'file'} color='red' h='100px' name='image'/>
           </FormControl>
         </Flex>
         <VStack p={'1rem'}>
         <Button type='submit' colorScheme={'red'} w={['90%','90%','50%','50%']}>
          Add New Property
        </Button>
         </VStack>
          </form>
      </Box>
    </Box>
  )
}

export default ContactUs
