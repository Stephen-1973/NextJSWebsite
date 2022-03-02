import {
    Box,
    HStack,
    Image,
    Heading,
    VStack,
    Text,
    useColorModeValue,
    Icon
} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import LazyLoad from 'react-lazyload';


function PrevNextDisplay({prevBlog,nextBlog,Description,imageSrc,Title}) {
    const textBgColor = useColorModeValue('gray.100','gray.900')
    const textColor = useColorModeValue("gray.900",'gray.100')
  return (
    <HStack mt='3'>
    {
        prevBlog && (
            <Box>
                <Icon as={ChevronLeftIcon}/>
            </Box>
        )
    }
        <Box boxShadow={'lg'} h={['25vh','25vh','20vh']} position={'relative'} w='fit-content'>
            <HStack h='100%' bg={textBgColor} position={'relative'}>
                <Image alt='' objectFit={'cover'} h={['80%','90%','100%']} w={['30%','50%','60%']} objectPosition='center' src={imageSrc}/>
                <VStack alignItems='flex-start' color={textColor} w='45vw'>
                    <Heading fontSize='100%' as={"h4"}>
                        {Title}
                    </Heading>
                    <Text fontSize={['95%']}>
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