import React from "react";
import Head from "next/head";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { SignOut } from "phosphor-react";
import { signOut } from "next-auth/react";

const User = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Head>
        <title>Usuário - Dashboard</title>
      </Head>
      <div className="">
        <Grid
          h="100vh"
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(6, 1fr)"
        >
          <GridItem rowSpan={12} colSpan={1} bg="gray.400" />
          <GridItem colSpan={5} bg="gray.300">
            <Flex justifyContent="end" alignItems="center" px="10" pt="2">
              <button onClick={() => signOut()} className="btn bg-transparent border-none">
                <SignOut size={32} />
              </button>
            </Flex>
          </GridItem>
          <GridItem rowSpan={12} colSpan={5} bg="gray.100" mt="3" ml="3" />
        </Grid>
      </div>
    </>
  );
};

export default User;
