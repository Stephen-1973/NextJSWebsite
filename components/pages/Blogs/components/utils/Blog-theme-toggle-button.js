import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';


function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode()
  const handleToggleMode = () => {
    toggleColorMode();
    location.reload();
  }
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div style={{display: 'inline-block'}} key={useColorModeValue('light','dark')} animate={{y:0,opacity:1}} exit={{y:20,opacity: 0}} transition={{duration:0.2}}>
        <IconButton aria-label='Toggle theme' colorScheme={useColorModeValue('purple', 'orange')} icon={useColorModeValue(<SunIcon />, <MoonIcon />)} onClick={handleToggleMode}>
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
export default ThemeToggleButton