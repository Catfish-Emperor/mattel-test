import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Flex,
    Image,
    Select,
    useColorModeValue
} from '@chakra-ui/react';

export default function Machine2(props) {
    const { isOpen: isFirstModalOpen, onOpen: openFirstModal, onClose: closeFirstModal } = useDisclosure();
    const { isOpen: isSecondModalOpen, onOpen: openSecondModal, onClose: closeSecondModal } = useDisclosure();

    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const mainButtonColor = selectedStatus === 'option2' ? 'red' : selectedStatus === 'option1' ? 'green' : selectedStatus === 'option3' ? 'yellow' : 'green';

    const bgColor = useColorModeValue('white', 'gray.700');

    return (
        <Flex justifyContent="flex-start" 
        alignItems="start" >
            <Button w={150} colorScheme={mainButtonColor} onClick={openFirstModal}>
                {props.name}
            </Button>

            <Modal size={'xl'} blockScrollOnMount={false} isOpen={isFirstModalOpen} onClose={closeFirstModal}>
            <ModalOverlay />
            <ModalContent bg={bgColor}> {/* Set the background color */}
            <ModalHeader>Machine Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            
            <Image 
            src='/machine-data.jpg' 
            alt='Machine Data'
            h={'full'}
            w={'full'} />
            
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={closeFirstModal}>
                Close
                </Button>
                <Button variant='ghost' onClick={openSecondModal}>Status Machine</Button>
                <Button variant='ghost' >History</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

            <Modal blockScrollOnMount={false} isOpen={isSecondModalOpen} onClose={closeSecondModal}>
                <ModalOverlay />
                <ModalContent bg={bgColor}>
                    <ModalHeader>Status Machine</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Select placeholder="Select Status" value={selectedStatus} onChange={handleStatusChange}>
                            <option value="option1">Running</option>
                            <option value="option2">Machine Breakdown</option>
                            <option value="option3">Loto Dept</option>
                        </Select>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={closeSecondModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
}