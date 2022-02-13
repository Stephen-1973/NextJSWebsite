import { Heading, Text,Button } from '@chakra-ui/react'
import { motion,AnimatePresence } from 'framer-motion';



function About() {
  const hoverEffect = {
    transform: "skew(-15deg);",
    transition: "all .4s",
    color: "#55c57a",
    padding: "0",
    paddingTop: "10",
    borderBottom: "1px solid #55c57a"
  }
  return (
    <AnimatePresence initial={true}>
      <motion.div style={{ textAlign: 'center'}} animate={{transform: 'translateY(0rem)'}} initial={{transform: "translateY(10rem)"}} transition={{duration: 1}} exit={{transform: 'translateY(10rem)'}}>
        <Heading cursor={'pointer'} w='fit-content' m='auto' _hover={hoverEffect} py={10} textTransform='uppercase' fontWeight='regular'>Get a glimpse of my life. &rarr;</Heading>
      </motion.div>
    </AnimatePresence>
  )
}

export default About