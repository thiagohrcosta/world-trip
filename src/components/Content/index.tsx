import { Container, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export function Content() {
  return (
    <Container mt="100px" maxW="lg" mx="auto" px={4} py={6}>
      <Flex>
        <Grid
          templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
          w="100%"
          justify="space-between"
          align="center"
          mt={["10", "32"]}
          mx="auto"
          maxW="1160px"
          flexWrap="wrap"
          gap={[1, 5]}
        >
          <GridItem>
            <Image height="70px" width="70px" src="/icon1.png" />
            <Text fontSize="24px" color="#47585B">
              vida noturna
            </Text>
          </GridItem>
          <GridItem>
            <Image height="70px" width="70px" src="/icon2.png" />
            <Text fontSize="24px" color="#47585B">
              praia
            </Text>
          </GridItem>
          <GridItem>
            <Image height="70px" width="70px" src="/icon3.png" />
            <Text fontSize="24px" color="#47585B">
              moderno
            </Text>
          </GridItem>
          <GridItem>
            <Image height="70px" width="70px" src="/icon4.png" />
            <Text fontSize="24px" color="#47585B">
              clássico
            </Text>
          </GridItem>
          <GridItem>
            <Image height="70px" width="70px" src="/icon5.png" />
            <Text fontSize="24px" color="#47585B">
              e mais...
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </Container>
  );
}
