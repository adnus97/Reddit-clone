import { authModalState } from "@/atoms/AuthModalAtom";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

type AuthInputsProps = {};

export const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};
