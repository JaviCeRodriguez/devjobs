import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading as="h2" fontSize={24}>
            💼 DevJobs
          </Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://img.wattpad.com/2d88ae482e4c03d72316691f36d484e3aa9e23e9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f57416554547679506e3132656c673d3d2d3433332e313635363032613830623662363937613937373639353431353134382e6a7067?s=fit&w=720&h=720"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center my={4}>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://img.wattpad.com/2d88ae482e4c03d72316691f36d484e3aa9e23e9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f57416554547679506e3132656c673d3d2d3433332e313635363032613830623662363937613937373639353431353134382e6a7067?s=fit&w=720&h=720"
                      }
                    />
                  </Center>
                  <Center my={4}>
                    <p>Javo 🧉</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem>Add Job</MenuItem>
                  <MenuItem>About Javo</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
