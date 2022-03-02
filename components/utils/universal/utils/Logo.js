import { useColorModeValue } from "@chakra-ui/system"
import { motion } from "framer-motion"

export default function Logo() {
  const bgSvg = useColorModeValue('black', '#fff')
    return (
      <motion.svg style={{ transform:'rotate(-3deg)' }} xmlns="http://www.w3.org/2000/svg" width="2rem" height="3rem" viewBox="0 0 229.211 132.538">
        <g id="Group_5" data-name="Group 5" transform="translate(-611.694 -686.263)">
          <path id="Path_1" data-name="Path 1" d="M623.075,731.979c.3-45.76,46.016-43.234,46.016-43.234H785.9l-86.277,43.234Z" transform="translate(55 -2.458)" fill={bgSvg}/>
          <path id="Path_2" data-name="Path 2" d="M622.6,727.521c.3-41.045,46.914-38.779,46.914-38.779H787.408l-88.375,38.779Z" transform="translate(1399.102 1507.521) rotate(-180)" fill={bgSvg}/>
          <path id="Path_3" data-name="Path 3" d="M677.6,732.435c20.286,44.279,47.036,28.542,47.036,28.542" transform="matrix(0.819, 0.574, -0.574, 0.819, 544.143, -258.632)" fill="#000"/>
          <path id="Path_4" data-name="Path 4" d="M679.15,738.16c9.828-5.207,20.82-32.768,32.117-32.376,11.088.384,21.737,19.108,21.737,19.108" transform="matrix(-0.156, -0.988, 0.988, -0.156, 153.67, 1566.461)" fill={bgSvg}/>
          <rect id="Rectangle_5" data-name="Rectangle 5" width="55" height="52" transform="translate(700 728)" fill={bgSvg}/>
          <path id="Polygon_2" data-name="Polygon 2" d="M17.163,4.495a2,2,0,0,1,3.7,0l16.027,38.95a2,2,0,0,1-1.85,2.761H2.986a2,2,0,0,1-1.85-2.761Z" transform="translate(664.59 751.553) rotate(-52)" fill={bgSvg}/>
          <rect id="Rectangle_6" data-name="Rectangle 6" width="30" height="21" rx="10.5" transform="translate(678 722)" fill={bgSvg}/>
          <path id="Polygon_3" data-name="Polygon 3" d="M18,0,36,16H0Z" transform="translate(741 764)" fill={bgSvg}/>
        </g>
      </motion.svg>
    )
}


  
