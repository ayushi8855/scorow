import { Box, Button, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Nav from './Nav'

const Product = () => {

    const [files, setFiles] = useState([]);
    const[data,setdata]=useState({})
    const [image,setimage]=useState()

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setimage(URL.createObjectURL(droppedFiles[0]))
    setFiles([...files, ...droppedFiles]);
    console.log(image)
  };

  const handleInputChange = (e) => {
    const selectedFiles = e.target.files;
    setimage(URL.createObjectURL(selectedFiles[0]))
    setFiles([...files, ...selectedFiles]);
   
    console.log(image)
  };

  function handleChange(e){
    const { name, value } = e.target;
     setdata({
      ...data,
      [name]: value,
     });
  }

  return (
    <div>
        <Nav></Nav>
       <Box w={"40%"} m="auto">
       <FormControl >
       <FormLabel>Create Product</FormLabel>
       <Input placeholder='Product Name' onChange={handleChange} name="name"/>
       <FormLabel></FormLabel>
       <Input placeholder='Product Description' onChange={handleChange} name="Description" />
       <FormLabel></FormLabel>
       <Select placeholder='Select Category' onChange={handleChange} name="category">
       <option value="Category 1">Category 1</option>
       <option value="Category 2">Category 2</option>
      </Select>

      <Box
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{width:"150%",  height: '300px', border: '2px solid #ECECEC' ,display:"flex",justifyContent:"space-between" ,marginTop:"50px"}}
    >
        <Box w={"50%"} m={2} border={"1px solid #ECECEC"} p={3} h={200}>
        <input type="file" onChange={handleInputChange}  />
        <p align="center">Drag And Drop</p> 
        </Box>
     
      <Box border={"1px solid #ECECEC"} w={"50%"} m={2} p={3} >
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
         
        ))}
      
     </Box>
      </Box>
      <Button border="1px solid #0081C9" bg={"white"} color={"#0081C9"} mt={3}>Add Product Detail</Button>
      <br></br>
      <Button  bg={"#0081C9"} color={"white"} mt={3}>Submit</Button>
     
        </FormControl>


      
       </Box>
      
    </div>
  )
}

export default Product