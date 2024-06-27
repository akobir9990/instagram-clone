import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm";
import auth from "../../../public/auth.png";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.md"} padding={0} border={"1px solid red"}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src={auth} alt="auth" />
          </Box>
          {/* right hand side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box>
              <Flex>
                <Image src="" h={"10"} alt="playstore logo" />
                <Image src="" h={"10"} alt="microsoft png" />
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
