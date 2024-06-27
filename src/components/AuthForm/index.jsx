import { Box, Button, Image, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid grey"} borderRadius={5}>
        <VStack spacing={4}>
          <Image src="" alt="logo" />
          <Input placeContent="Email" fontSize={14} type="email" />
          <Input placeContent="Password" fontSize={14} type="pasword" />
          <Input placeContent="Congfirm Pasword" fontSize={14} type="pasword" />
          {isLogin ? "" : ""}
          <Button></Button>
        </VStack>
      </Box>
    </>
  );
}

export default AuthForm;
