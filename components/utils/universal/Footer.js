import {
  Box,
  chakra,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import Logo from './utils/Logo';


export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('transparent', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <HStack>
          <Icon as={Logo}></Icon>
          <Heading>
            Stephen
          </Heading>
        </HStack>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/blogs'}>Blogs</Link>
          <Link href={'/contact'}>Contact</Link>
        </Stack>
      </Container>
      <Box
        justifyContent={'center'}
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          justifyContent={'center'}
          textAlign={'center'}
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text w='100%'>© {new Date().getFullYear()} Codding.in All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}