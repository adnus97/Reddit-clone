import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { User } from "firebase/auth";

type SearchInputProps = {
  user?: User | null;
};

export const SearchInput = ({ user }: SearchInputProps) => {
  return (
    <Flex flexGrow={1} mr={2} align="center" maxWidth={user ? "auto" : "600px"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" mb={1} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
