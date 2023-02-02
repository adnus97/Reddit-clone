import { AuthModal } from "../../Modal/AuthModal";
import { Button, Flex } from "@chakra-ui/react";

import { AuthButtons } from "./AuthButtons";
import { signOut, User } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { Icons } from "./Icons";
import { UserMenu } from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

export const RightContent = ({ user }: RightContentProps) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
