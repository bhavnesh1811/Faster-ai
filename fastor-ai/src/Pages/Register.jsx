import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { storeOtp, authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      return toast({
        title: `Please Enter Valid Phone Number`,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
    setLoading(true);
    let res = await fetch(`https://staging.fastor.in/v1/pwa/user/register`, {
      method: "POST",
      body: JSON.stringify({
        phone: phoneNumber,
        dial_code: "+91",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    setLoading(false);
    if (res.status === "Success") {
      toast({
        title: `${res.data} Successfully`,
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      storeOtp("123456", phoneNumber);
    } else {
      return toast({
        title: `There is some error`,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }

    navigate("/verifyOtp");
  };

  if (authState.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Flex
      w={{ base: "90%", md: "60%", lg: "30%" }}
      justify={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      rounded={"xl"}
      boxShadow={"lg"}
      px={4}
      py={{ base: 4, lg: 12 }}
      m={"40px auto"}
      gap="8px"
    >
      <Heading lineHeight={1.1} fontSize={{ base: "xl", md: "3xl" }}>
        Enter Your Mobile Number
      </Heading>
      <Text fontSize={{ base: "sm", sm: "md" }}>
        We will send you the 6 digit verification code
      </Text>
      <Stack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl>
          <InputGroup>
            <InputLeftAddon>+91</InputLeftAddon>
            <Input
              placeholder="Enter your Number"
              value={phoneNumber}
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <Button
          bg={"red.400"}
          color={"white"}
          _hover={{
            bg: "red.500",
          }}
          type="submit"
          isLoading={loading}
        >
          Send Code
        </Button>
      </Stack>
    </Flex>
  );
};

export default Register;
