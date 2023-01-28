import { AuthModal } from "../../Modal/AuthModal";
import { Flex } from "@chakra-ui/react";

import { AuthButtons } from "./AuthButtons";

type RightContentProps = {};

export const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
