import { Link,useColorModeValue, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import KubernetesBlogs from './utils/BlogSection/Kubernetes-blogs';
import MachineLearningBlogs from './utils/BlogSection/Machine-learning-blogs';
import OtherBlogs from './utils/BlogSection/other-blogs';

function ReadMyBlogs() {
  const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
  }

  const pickBg = useColorModeValue("rgba(255,255,255,0.4)","rgba(11, 11, 11, 0.4)")
  
  return (
    <>
      <KubernetesBlogs/>
      <MachineLearningBlogs/>
      <OtherBlogs/>
    </>
  )
}

export default ReadMyBlogs

 