import React from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

function ModalComponent({ text, src, full, name }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>

            <button onClick={onOpen} className="absolute MyButton">
                Проверка
            </button>
            <Modal
                size={full ? "full" : "4xl"}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <img src={src} alt='' />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Закрыть</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalComponent;
