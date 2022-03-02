// @ts-check
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
  Stack,
  Center,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import NavBar from '../../utils/universal/NavBar';
import { useState } from 'react';
import ModalDisplay from './components/ModalDisplay';
import Footer from '../../utils/universal/Footer';


export default function Contact() {
  const [modalState, setModalState] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setMessage] = useState('');

  
  const sendEmail = async (e) => {
    e.preventDefault();
    const request = await fetch('/api/contact-mail-sender', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        text: text
      })
    });
    if (request.status === 201) {
      setModalState(true)
    } else {
      alert('Something went wrong!');
    }
  }
  return (
    <>
      <NavBar activeTab={'Work'} />  
      {modalState && <ModalDisplay setModalState={setModalState} modalState={modalState}/>}
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="blue.900"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Stack direction={['column','column','row']} spacing={10}>
                <WrapItem>
                  <Center m='auto' flexDirection={'column'}>
                    <Heading w='100%' textAlign='center'>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        {/* <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        </Button> */}
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          <Link href='mailto:ststephen426@gmail.com'>
                            Mail me
                          </Link>
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Los Angeles, CA
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        onClick={() => window.open('https://www.facebook.com')}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        onClick={() => window.open('https://github.com/Stephen-1973')}
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        onClick={() => window.open("https://discord.gg/Spw9UTh7yJ")}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Center>
                </WrapItem>
                <WrapItem>

                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <form onSubmit={(e)=>sendEmail(e)}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            >
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input onChange={(e)=>setEmail(e.target.value)} required type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            >
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input onChange={(e)=>setEmail(e.target.value)} required type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                            <Textarea
                              onChange={(e) => setMessage(e.target.value)}
                              required
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                          <FormControl id="name" float="right">
                              <Button
                              mt={3}
                              type='submit'
                              variant="solid"
                              bg="blue.500"
                              color="white"
                              _hover={{outline:'none'}}>
                              Send Message
                            </Button>
                          </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer/>
    </>
  );
}