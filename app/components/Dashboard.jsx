// components/MemberDashboard.js
import { Box, Flex, Text, Progress, Avatar, Table, Badge, Button, Heading } from '@chakra-ui/react';
import { CreditCard, Share2 } from 'lucide-react';

export default function MemberDashboard() {
  const squadMembers = [
    { name: 'Tunde (Captain)', amount: '₦1,500,000', status: 'Paid', img: 'https://bit.ly/dan-abramov' },
    { name: 'Amaka', amount: '₦1,200,000', status: 'Paid', img: 'https://bit.ly/tioluwani-kolawole' },
    { name: 'Seyi', amount: '₦800,000', status: 'Pending', img: 'https://bit.ly/kent-c-dodds' },
  ];

  return (
    <Box p="6" bg="white" rounded="2xl" shadow="xl" maxW="800px" mx="auto" mt="10">
      <Flex justify="space-between" align="center" mb="6">
        <Box>
          <Heading size="lg">Lekki Phase 1 Terrace</Heading>
          <Text color="gray.500">Squad Goal: ₦5,000,000</Text>
        </Box>
        <Button variant="ghost" gap="2">
          <Share2 size={16}/> Invite
        </Button>
      </Flex>

      {/* Progress Section */}
      <Box mb="10">
        <Flex justify="space-between" mb="2">
          <Text fontWeight="bold">Total Pooled: ₦3,500,000</Text>
          <Text fontWeight="bold">70%</Text>
        </Flex>
        <Progress.Root value={70} colorPalette="green" size="lg">
          <Progress.Track rounded="full">
            <Progress.Range rounded="full" />
          </Progress.Track>
        </Progress.Root>
      </Box>

      {/* Member Contributions - Corrected v3 Table */}
      <Heading size="sm" mb="4">Squad Contributions</Heading>
      <Table.Root size="sm" variant="line">
        <Table.Body>
          {squadMembers.map((m, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Flex align="center" gap="3">
                  <Avatar.Root size="sm">
                    <Avatar.Image src={m.img} />
                    <Avatar.Fallback name={m.name} />
                  </Avatar.Root>
                  <Text fontWeight="medium">{m.name}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell textAlign="end" fontWeight="bold">
                {m.amount}
              </Table.Cell>
              <Table.Cell textAlign="end">
                <Badge colorPalette={m.status === 'Paid' ? 'green' : 'orange'}>
                  {m.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* Action Area */}
      <Box mt="8" p="6" bg="blue.50" rounded="xl" textAlign="center">
        <Text mb="4" fontSize="sm" color="blue.800">Your balance: ₦0.00</Text>
        <Button bg="blue.600" color="white" size="lg" width="full" gap="2">
          <CreditCard size={20} /> Contribute Now
        </Button>
      </Box>
    </Box>
  );
}