// @ts-check
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"


function ModalDisplay({ modalState,setModalState }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={modalState} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Successful!</ModalHeader>
          <ModalCloseButton _focus={{outline:'none'}} onClick={()=>setModalState(false)} />
          <ModalBody>
            <Text>
              Email sent successfully! Thank you for contacting me. I will get back to you as soon as possible. May this be the path to new friendship 😉
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button _focus={{outline:'none'}} colorScheme='blue' mr={3} onClick={()=>setModalState(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDisplay