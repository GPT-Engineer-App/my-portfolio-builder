import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" color="gray.500">
          Frontend Developer | React Expert
        </Text>
      </Box>

      {/* About Me */}
      <VStack spacing={5} alignItems="flex-start" py={10}>
        <Heading as="h2" size="xl">
          About Me
        </Heading>
        <Text fontSize="lg">I'm a passionate Frontend Developer with a focus on React and modern JavaScript ecosystems. With over 5 years of professional experience, I have developed a strong skill set in building scalable and maintainable web applications.</Text>
        <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzE0MTEwNDE1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" />
      </VStack>

      {/* Portfolio */}
      <Box py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Portfolio
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <PortfolioItem title="Project 1" description="A React application showcasing advanced state management techniques." imageUrl="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2plY3R8ZW58MHx8fHwxNzE0MTEwNDE1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <PortfolioItem title="Project 2" description="A responsive web design built with Chakra UI and integrated with APIs." imageUrl="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNDA3MjI2Mnww&ixlib=rb-4.0.3&q=80&w=1080" />
          <PortfolioItem title="Project 3" description="An e-commerce platform with real-time data processing and secure payment integration." imageUrl="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwcGxhdGZvcm18ZW58MHx8fHwxNzE0MTEwNDE2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </Box>

      {/* Contact */}
      <VStack spacing={3} alignItems="flex-start" py={10}>
        <Heading as="h2" size="xl">
          Contact
        </Heading>
        <HStack spacing={5}>
          <Link href="https://github.com" isExternal>
            <Button leftIcon={<Icon as={FaGithub} />}>GitHub</Button>
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Button leftIcon={<Icon as={FaLinkedin} />}>LinkedIn</Button>
          </Link>
          <Link href="mailto:example@example.com">
            <Button leftIcon={<Icon as={FaEnvelope} />}>Email</Button>
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

const PortfolioItem = ({ title, description, imageUrl }) => (
  <VStack spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Image src={imageUrl} alt={title} boxSize="100%" objectFit="cover" />
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text>{description}</Text>
  </VStack>
);

export default Index;
