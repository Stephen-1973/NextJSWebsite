import {
    Box,
    HStack,
    Image,
    Heading,
    VStack,
    Text,
    IconButton,
    Icon
} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';


function PrevNextDisplay({prevBlog,nextBlog,Description,imageSrc,Title}) {
  return (
    <HStack mt='3'>
    {
        prevBlog && (
            <Box>
                <Icon as={ChevronLeftIcon}/>
            </Box>
        )
    }
        <Box boxShadow={'lg'} h='15vh' position={'relative'} w={{base:'90%',md:'50%'}}>
            <HStack h='100%' bg='whitesmoke' spacing='10' position={'relative'}>
                <Image objectFit={'cover'} h='100%' width='60%' objectPosition='center' loading='lazy' src={imageSrc}/>
                <VStack alignItems='flex-start'>
                    <Heading fontSize='100%' as={"h4"}>
                        {Title}
                    </Heading>
                    <Text fontSize={['2vw','2vw','.9vw']}>
                       {Description?.slice(0,100)}... &rarr;
                    </Text>
                </VStack>
            </HStack>
        </Box>
        {
            nextBlog && (
                <Box>
                    <Icon as={ChevronRightIcon}></Icon>
                </Box>
            )
        }
    </HStack>
  )
}

export default PrevNextDisplay