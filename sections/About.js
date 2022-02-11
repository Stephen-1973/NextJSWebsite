import { Heading, Text,Button } from '@chakra-ui/react'
import { motion,AnimatePresence } from 'framer-motion';



function About() {
  return (
    <AnimatePresence initial={true}>
      <motion.div style={{ textAlign: 'center'}} animate={{transform: 'translateY(0rem)'}} initial={{transform: "translateY(10rem)"}} transition={{duration: 1}} exit={{transform: 'translateY(10rem)'}}>
        <Heading py={10} textTransform='uppercase' fontWeight='regular'>About me</Heading>
        <Text m='auto' maxW={['80%','80%','60rem']} textAlign='left'>
          Hey! I am Stephen. It&#39;s great that you wanna know about me. I am an ex Amazon Full Stack Developer. I have 12 years of experience in the DataScience and Web Development.
          <br />
          <br/>
          My carrer started out has a Data Scientist. I first worked in a small startup where I developed my interest towards Web Developm...
        </Text>
        <Button _focus={{textDecoration:'none'}} my='1rem' transition='all .2s ease-out' colorScheme='teal' variant='outline' _hover={{color:'white',bg:'teal',colorScheme:'teal',varaint:'solid'}}>
          Read More &rarr;
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}

export default About
// ent. Since I was so interested in Web Development the company that I have worked in helped me in learning web development and soon after that I started creating multiple web front end pages. But my interest didn&#39;t stop there I started learning Node Js and Typescript which was new to the Web Industry that time. I worked as Freelancer and did some part time jobs in small companies to gain more experience on Full Stack Web Development.
//             <br />
//             <br />
//             Finally the big day came when I applied to Amazon as a Full Stack Developer. The excitment didn&#39;t last long. After 3 years I quit the job in amazon. The reason was because when do jobs in companies like FAANG you can either be Backend Developer or Front End or Data Scientist. I wanted to do jobs which involved Data Science as well. I didn&#39;t want my skills as Front or Back end or Data Scientist to go to waste. So here I am.
//             <br />
//             <br />
//             <span style={{ fontWeight: '550' }}>
//             My goal now is to start up a educational company where I teach my students the skills to land a job in FAANG as a Front End Developer or Backend Developer or as a Data Scientist or even how to start up their own company and how to come up incredible ideas and possible fields where they can start up a company in AI world.
//             </span>
//             <br />
//             <br />
//             That&#39;s all about me. Excited to learn on how to land a job in FAANG or start up your own company ?