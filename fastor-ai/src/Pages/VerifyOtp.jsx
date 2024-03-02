import {
  Box,
  Center,
  Heading,
  useToast,
  Button,
  FormControl,
  Flex,
  Stack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const VerifyOtp = () => {
  const { authState, verifyOtp } = useContext(AuthContext);
  const otp = sessionStorage.getItem("otp");
  const [pin, setPin] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [loading, setLoading] = useState(false);

  const submitOtp = async (e) => {
    e.preventDefault();
    if (pin.length !== 6) {
      return toast({
        title: `Please Enter Valid Pin`,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
    setLoading(true);

    let res = await fetch(`https://staging.fastor.in/v1/pwa/user/login`, {
      method: "POST",
      body: JSON.stringify({
        phone: authState.phoneNumber,
        dial_code: "+91",
        otp: authState?.otp || "123456",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    setLoading(false);
    if (res.status === "Success") {
      toast({
        title: `Hello ${res.data.user_name}`,
        description: "Otp verified Successfully",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      verifyOtp(res.data.token, res.data.user_name);
      sessionStorage.setItem("token", JSON.stringify(res.data.token));
      sessionStorage.setItem("user_name", JSON.stringify(res.data.user_name));
    } else {
      return toast({
        title: `There is some error`,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }

    navigate("/");
  };

  if (!otp) {
    return <Navigate to="/sendotp" />;
  }
  return (
    <Box maxH={"100vh"}>
      <Box cursor={"pointer"} onClick={() => navigate("/sendotp")}>
        <IoIosArrowBack
          style={{
            border: "1px solid lightgray",
            margin: "20px",
            fontSize: isMobile ? "32px" : "48px",
            padding: "8px",
            borderRadius: "12px",
          }}
        />
      </Box>

      <Flex
        w={{ base: "90%", md: "60%", lg: "30%" }}
        justify={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        rounded={"xl"}
        boxShadow={"lg"}
        px={6}
        py={{ base: 4, lg: 12 }}
        m={"auto"}
        gap="8px"
      >
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: "xl", md: "3xl" }}>
            OTP Verification
          </Heading>
        </Center>
        <Center fontSize={{ base: "sm", sm: "md" }} color={"#838BA1"}>
          Enter the verification code we just sent on your Mobile Number.
        </Center>
        <Stack as="form" spacing={6} onSubmit={submitOtp}>
          <FormControl>
            <HStack>
              <PinInput value={pin} onChange={(value) => setPin(value)} otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
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
            Verify
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default VerifyOtp;
