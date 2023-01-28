import { authModalState } from "@/atoms/AuthModalAtom";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { AuthInputs } from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

export const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleState = () => {
    setModalState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleState}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              width="70%"
            >
              <OAuthButtons />
              <Text fontWeight={700} color="gray.500">
                OR
              </Text>
              <AuthInputs />
              {/* <ResetPassword/> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
