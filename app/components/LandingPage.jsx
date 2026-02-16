// pages/index.js
'use client';
import { Box, Button, Container, Heading, Text, Stack, SimpleGrid, Icon } from '@chakra-ui/react';
import { Users, ShieldCheck, Wallet } from 'lucide-react';

export default function LandingPage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.xl" py={20}>
        <Stack spacing={8} textAlign="center" align="center">
          <Heading as="h1" size="3xl" fontWeight="black" color="blue.900">
            Rent Your Dream House <br /> 
            <Text as="span" color="blue.500">With Your Squad.</Text>
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl">
            Don't let Lagos rent break your bank. Find a building, invite your friends, 
            pool funds securely, and move in together.
          </Text>
          <Stack direction="row" spacing={4}>
            <Button size="lg" colorScheme="blue" px={10}>Start a Squad</Button>
            <Button size="lg" variant="outline" colorScheme="blue">Browse Houses</Button>
          </Stack>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={20}>
          <Feature icon={Users} title="Team Up" desc="Find friends or verified roommates to rent entire flats." />
          <Feature icon={Wallet} title="Smart Pooling" desc="Automated savings and transparent contribution tracking." />
          <Feature icon={ShieldCheck} title="Group Security" desc="BVN-verified members and legally binding co-tenancy." />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const Feature = ({ icon, title, desc }) => (
  <Stack bg="white" p={8} shadow="sm" rounded="xl" align="center" textAlign="center">
    <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
    <Heading size="md">{title}</Heading>
    <Text color="gray.500">{desc}</Text>
  </Stack>
);