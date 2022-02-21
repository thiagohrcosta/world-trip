import { Box, Container, Flex, Grid, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage="url('/Background.png')"
      h={["163px", "250px", "250px", "335px"]}
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container maxW="lg" mx="auto" px={4} py={6}>
        <SimpleGrid columns={2} spacing={10}>
          <Box 
            width={"80%"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text 
              color="white"
              fontSize={["36px"]}  
            >            
            5 Continentes, 
            infinitas possibilidades.
            </Text>
            <Text 
              color="lightgray"
              fontSize={["20px"]}
            >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>

          <Box>
            <Image
              src="/Airplane.png"
              transform="translateY(48px)"
              mt="20px"
             />
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}