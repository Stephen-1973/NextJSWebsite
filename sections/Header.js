import { Text,Button,Image,VStack,SimpleGrid,GridItem } from '@chakra-ui/react';
import DraggableText from '../helpers/draggableText';
import { motion, AnimatePresence } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react';

function Header() {
  const buttonBg = useColorModeValue("linear-gradient(120deg, white 0%, white 50%, teal 50%)", 'linear-gradient(120deg, transparent 0%,#000 50%, teal 50%)')
  return (
    <SimpleGrid columns={[1,1,2]} row={[2,2,1]} flexDirection='row' h={['70vh','65vh','50vh']} w='100%' mx='auto' mb={0} mt={10}>
      <GridItem position='relative' h='100%' w='80%' m='auto' alignItems='center' display='flex' justifyContent='center'>
            <Image objectFit='cover' h='80%' w='100%' src='/bg.jpeg' alt='My WorkSpace' />
        <DraggableText/>
      </GridItem>
      <GridItem h='fit-content' mx='auto' my={['0','0','auto']} display='flex'>
        <AnimatePresence initial={true}>
          <VStack spacing={[4,6]} my='auto' mx={['auto','auto','0']} w={['80%','80%','60%']} h='80%' transform='translateY(-2.5rem)' alignItems='flex-start'>
              <motion.div animate={{transform: 'translateY(3rem)'}} transition={{duration: 0.6}} initial={{transform: 'translateY(0rem)'}} exit={{transform: 'translateY(0rem)'}}>
                <Text textAlign='left' fontWeight='bold' textTransform='uppercase'>Hey!</Text>
              </motion.div>
              <motion.div animate={{transform: 'translateY(3rem)'}} transition={{duration: 0.5}} initial={{transform: 'translateY(0rem)'}} exit={{transform: 'translateY(0rem)'}}>
                <Text>I know it&#39;s a <span style={{ fontWeight: 'bold' }}>flex to show off my desk setup</span> as the first thing on my website 😅. But it&#39;s the <span style={{ fontWeight: 'bold' }}>best thing I have in my life</span> and also <span style={{ fontWeight: 'bold' }}>I don&#39;t have any other ideas</span> to make my site better <span style={{ fontWeight: 'bold' }}>than displaying my absolute fortune desk setup</span></Text>
              </motion.div>
              <motion.div animate={{transform: 'translateY(3rem)'}} transition={{duration: 0.4}} initial={{transform: 'translateY(0rem)'}} exit={{transform: 'translateY(0rem)'}}>
                <Button _focus={{textDecoration:'none'}} role='group' variant='outline' borderBottom='.2rem solid teal' transition='all .2s' _hover={{backgroundPosition: "100%",color:'white'}} backgroundSize='230%' bgImage={buttonBg}>
                  Know more <Text transition='all .2s ease-in' ml='.3rem' _groupHover={{marginLeft:".5rem"}}>&rarr;</Text>
                </Button>
              </motion.div>
            </VStack>
        </AnimatePresence>
      </GridItem>
    </SimpleGrid>
  )
}

export default Header
