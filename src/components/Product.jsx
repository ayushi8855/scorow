import { Box, Button,Flex, ButtonGroup, FormControl, FormLabel, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Select, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import Nav from './Nav'
import { AiOutlineInbox } from "react-icons/ai"

const Product = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [files, setFiles] = useState([]);
  const [data, setdata] = useState({
    "id": nanoid(4),
    "name": "",
    "description": " ",
    "category": "",
    "img": "",
    "partNumber": "",
    "size": "2"
  })
  const [image, setimage] = useState()

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

  function handleChange(e) {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
      img: image
    });

  }

  async function handleSubmit() {
    try {
      let res = await axios.post("http://localhost:8080/product", data)

      alert("Add successfull !");

    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }

    console.log("details", data);
  }

  return (
    <div>
      <Nav></Nav>
      <Box w={"40%"} m="auto">
        <FormControl >
          <FormLabel>Create Product</FormLabel>
          <Input placeholder='Product Name' onChange={handleChange} name="name" />
          <FormLabel></FormLabel>
          <Input placeholder='Product Description' onChange={handleChange} name="description" />
          <FormLabel></FormLabel>
          <Select placeholder='Select Category' onChange={handleChange} name="category">
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </Select>

          <Box
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{ width: "150%", height: '350px', border: '2px solid #ECECEC', display: "flex", justifyContent: "space-between", marginTop: "50px" }}
          >
            <Box w={"50%"} m={2} border={"2px solid #ECECEC"} p={3} h={200} borderStyle="dashed" textAlign={"center"} >
             
              <Box marginLeft={"40%"}>
              {/* <AiOutlineInbox size={"60"} ></AiOutlineInbox> */}
              <label for="file"><span >  <AiOutlineInbox size={"60"} ></AiOutlineInbox></span></label>
              <input type="file" id="file" onChange={handleInputChange} style={{display: "none" }}/>
              </Box>
             
              <p align="center">Click and drag file to this area to upload </p>
              <p align="center">Support for single or bulk upload </p>
             
            </Box>
            <Box w={"50%"}  borderStyle="dashed">
            <Box border={"2px solid #ECECEC"} w={"90%"} h={"80%"} m={2} p={2} borderStyle="dashed" >
              {files.map((file, index) => (
                <div key={index}>{file.name}</div>

              ))}
             
            </Box>
           
            <Flex  justifyContent="space-around" w={"250px"}>
              <Button onClick={()=>{setFiles([])}} >Clear</Button>
              <Button>Insert into Port</Button>
              </Flex>
            </Box>
           
          </Box>


          <Popover>
            <PopoverTrigger>

              <Button border="1px solid #0081C9" bg={"white"} color={"#0081C9"} mt={3} onClick={onToggle}>Add Product Detail</Button>
            </PopoverTrigger>
            <PopoverContent bg="#EEEEEE" >
              <PopoverHeader fontWeight='semibold' bg={"white"}>Add Product Detail</PopoverHeader>
              <PopoverArrow bg='#0081C9' />
              <PopoverCloseButton bg='#0081C9' />
           
              <Input placeholder='ADD PART NO.'bg={"white"} name='partNumber' onChange={handleChange} m={2} w={"95%"}></Input>
              <Input placeholder='ADD SIZE'bg={"white"} name="size" onChange={handleChange} m={2} w={"95%"}></Input>
            </PopoverContent>
          </Popover>
          <br></br>
          <Button bg={"#0081C9"} color={"white"} mt={3} onClick={handleSubmit}>Submit</Button>

        </FormControl>



      </Box>

    </div>
  )
}

export default Product