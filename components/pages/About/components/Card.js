import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";

export default function Card({ data }) {
  if (data.alternative) {
    return (
      <Box className='alternative-story' w='95vw' m='auto' p={3} h='fit-content'>
        <Stack flexDirection={['column', 'column', 'row']}>
          <Box w={['100%','100%','60%']}>
            <VStack className='alternative-story-details' alignItems='flex-start' ml='3'>
              <Heading>
                {data.title}
              </Heading>
              <Text maxW='97%'>
                {data.description}
              </Text>
            </VStack>
          </Box>
          <Box w={['100%','100%','45%']}>
            <LazyLoad>
              <Image className='alternative-story-img' w='100%' alt='' src={data.src} />
            </LazyLoad>
          </Box>
        </Stack>
      </Box>
    )
  } else {
    
    return (
      <Box className='story' w='95vw' m='auto' p={3} h='fit-content'>
        <Stack flexDirection={['column', 'column', 'row']}>
          <Box className='story-img' w={['100%','100%','45%']} position={'relative'}>
            <LazyLoad>
              <Image w='100%' alt='' src={data.src} />
            </LazyLoad>
          </Box>
          <Box w={['100%','100%','60%']}>
            <VStack className='story-details' alignItems='flex-start' ml='3'>
              <Heading>
                {data.title}
              </Heading>
              <Text>
                {data.description}
              </Text>
            </VStack>
          </Box>
        </Stack>
      </Box>
    )
  }
}