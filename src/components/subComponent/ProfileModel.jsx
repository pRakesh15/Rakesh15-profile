import {
    Avatar,
    Button,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Wrap,
    WrapItem,
    useDisclosure,
  } from "@chakra-ui/react";
  import { FaRegEye } from "react-icons/fa";
  
  import React from "react";

const ProfileModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        {children ? (
          <span onClick={onOpen}>{children}</span>
        ) : (
          <IconButton className="flex" icon={<FaRegEye />} onClick={onOpen} />
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="flex justify-center text-4xl">
              {user.username}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="flex justify-center">
              <img src={user.pic} className="w-56" alt="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" />
            </ModalBody>
  
            <ModalFooter className=" text-2xl">{user.email}</ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

export default ProfileModel
