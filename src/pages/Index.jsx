import { Box, Flex, Text, Button, Image, Heading, Link, Container, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" alignItems="center" justifyContent="space-between" p={4} bg="teal.500" color="white">
        <Heading as="h1" size="lg">
          webbografi
        </Heading>
        <HStack as="nav" spacing={4}>
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link href="#features" _hover={{ textDecoration: "none" }}>
            Features
          </Link>
          <Link href="#about" _hover={{ textDecoration: "none" }}>
            About
          </Link>
          <Link href="#contact" _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </HStack>
        <Icon as={FaBars} display={["block", "block", "none"]} w={6} h={6} />
      </Flex>

      {/* Hero Section */}
      <Flex as="section" id="home" justifyContent="center" alignItems="center" bg="gray.200" p={8} height="70vh">
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="2xl">
            Your Digital Presence, Redefined.
          </Heading>
          <Text fontSize="xl">Explore our expert web design and development services.</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Featured Content */}
      <Container as="section" id="features" maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Heading as="h3" size="xl">
            Featured Content
          </Heading>
          <HStack spacing={8} wrap="wrap" justify="center">
            <Box maxW="sm" p={4} boxShadow="md" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTcxMjU0MjUxMnww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Heading as="h4" size="md" mt={4}>
                Modern Design
              </Heading>
              <Text mt={2}>Responsive, visually appealing designs that captivate your audience.</Text>
            </Box>
            <Box maxW="sm" p={4} boxShadow="md" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzEyNTQyNTEyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
              <Heading as="h4" size="md" mt={4}>
                SEO & Analytics
              </Heading>
              <Text mt={2}>Optimize your site for search engines and track performance with analytics.</Text>
            </Box>
            <Box maxW="sm" p={4} boxShadow="md" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjB3ZWJzaXRlfGVufDB8fHx8MTcxMjU0MjUxM3ww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Heading as="h4" size="md" mt={4}>
                Security
              </Heading>
              <Text mt={2}>Keep your website secure with the latest in web security practices.</Text>
            </Box>
          </HStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Flex as="footer" bg="teal.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text>© 2023 webbografi.se</Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebookF} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedinIn} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
