import { Text,Button,Image,VStack,SimpleGrid,GridItem } from '@chakra-ui/react';
import DraggableText from '../helpers/draggableText';
import { motion, AnimatePresence } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react';


function Header() {
  const buttonBg = useColorModeValue("linear-gradient(120deg, white 0%, white 50%, teal 50%)", 'linear-gradient(120deg, transparent 0%,#000 50%, teal 50%)')
  return (
    <SimpleGrid columns={[1,1,2]} row={[2,2,1]} h='fit-content' w='100%' mx='auto' my={10} spacing={[10 ,5,0]} alignItems='center' justifyContent={'center'}>
      <GridItem position='relative' h='100%' w='80%' m='auto' alignItems='center' display='flex' justifyContent='center'>
            <Image objectFit='cover' h='100%' w='100%' src='/bg.jpeg' alt='My WorkSpace' />
        <DraggableText/>
      </GridItem>
      <AnimatePresence initial={true}>
        <GridItem h='fit-content' mx='auto' my={['0','0','auto']} >
            <VStack spacing={[4,6]} my='auto' mx={['auto','auto','0']} w={['80%','80%','60%']} h='100%' alignItems='flex-start'>
                <motion.div initial={{transform: 'translateY(-3rem)'}} transition={{duration: 0.6}} animate={{transform: 'translateY(0rem)'}} exit={{transform: 'translateY(0rem)'}}>
                  <Text textAlign='left' fontWeight='bold'>Howdy!</Text>
                </motion.div>
                <motion.div initial={{transform: 'translateY(-3rem)'}} transition={{duration: 0.5}} animate={{transform: 'translateY(0rem)'}} exit={{transform: 'translateY(0rem)'}}>
                    <Text>
                    I'm Stephen a Freelance web developer looking to start a Educational Institution for SaaS aspirants.
                    This website is the first step towards that goal. I publish my First in class Blogs where I teach advanced web development, Machine Learning Algorithms and in total 
                    provide you with the skills which will help you land a job in FAANG. 
                    </Text>
                </motion.div>
                <motion.div initial={{transform: 'translateY(-3rem)'}} transition={{duration: 0.4}} animate={{transform: 'translateY(0rem)'}} exit={{transform: 'translateY(0rem)'}}>
                  <Button _focus={{textDecoration:'none'}} role='group' variant='outline' borderBottom='.2rem solid teal' transition='all .2s' _hover={{backgroundPosition: "100%",color:'white'}} backgroundSize='230%' bgImage={buttonBg}>
                    Know more <Text transition='all .2s ease-in' ml='.3rem' _groupHover={{marginLeft:".5rem"}}>&rarr;</Text>
                  </Button>
                </motion.div>
              </VStack>
        </GridItem>
      </AnimatePresence>

    </SimpleGrid>
  )
}

export default Header
 