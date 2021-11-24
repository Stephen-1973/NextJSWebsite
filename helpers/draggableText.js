import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';


function DraggableText() {
  const bgDraggableText = useColorModeValue('gray.100','gray.800')
  const draggableText = useColorModeValue("gray.800",'gray.100')
  return (
    <>
    <motion.div drag style={{ position: 'absolute' }}>
        <Text display={['none','none','inline-block']} fontSize='4rem' fontWeight='regular' textTransform='uppercase' color={draggableText} bg={bgDraggableText}>My WorkSpace</Text>
      </motion.div>
      <motion.svg style={{ position: 'absolute', transform: 'translate(7rem,5.5rem)' }} initial={{opacity:1}} animate={{opacity: 0}} transition={{duration: 4}} xmlns="http://www.w3.org/2000/svg" width="160" height="91.479" viewBox="0 0 187.111 91.479">
        <g id="Group_4" data-name="Group 4" transform="translate(-719.889 -687.521)">
          <path id="Polygon_1" data-name="Polygon 1" d="M21.5,0,43,57H0Z" transform="translate(719.889 703.629) rotate(-22)" fill="#fff"/>
          <rect id="Rectangle_4" data-name="Rectangle 4" width="167" height="57" rx="18" transform="translate(740 722)" fill="#fff"/>
          <text id="I_m_draggable" data-name="I’m draggable" transform="translate(772 739)" fill="#7E8B9B" fontSize="15" fontFamily="PingFangHK-Semibold, PingFang HK" fontWeight="600"><tspan x="0" y="16">I’m draggable</tspan></text>
        </g>
      </motion.svg>
    </>
  )
}

export default DraggableText
