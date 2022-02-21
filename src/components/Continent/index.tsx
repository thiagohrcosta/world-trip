import { Flex, Text } from "@chakra-ui/react";

export function Continent() {
  return (
    <Flex>
      <Flex 
        fontSize="36px" 
        fontWeight="500" 
        flexDirection="column" 
        alignItems="center"
        mx="auto"
        color="#47585B"
      >
        <Text
          textAlign={["center"]}
        >
          Vamos nessa? <br/>
          Então escolha seu continente
        </Text>
      </Flex>
    </Flex>
  )
}