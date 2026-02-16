// app/invite/[id]/page.tsx
import PropertyGallery from '@/app/components/PropertyGallery';
import { Box, Badge, Heading, Text, Stack, Image, Button, Progress, Flex } from '@chakra-ui/react'
import { MapPin } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InvitePage({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
    <PropertyGallery />
    <Box bg="gray.50" minH="100vh" p={4} display="flex" alignItems="center" justifyContent="center">
      {/* Changed 'spacing' to 'gap' */}
      <Stack gap="6" maxW="md" w="full" bg="white" rounded="3xl" overflow="hidden" shadow="2xl" pb="8">
        
        <Box position="relative">
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
            alt="Lagos Apartment"
            h="250px"
            w="full"
            objectFit="cover"
            />
          <Badge position="absolute" top="4" left="4" bg="blue.600" color="white" px="3" rounded="full">
            Squad ID: {id}
          </Badge>
        </Box>

        {/* Changed 'spacing' to 'gap' */}
        <Stack px="6" gap="4">
          <Heading size="md" fontWeight="bold">Lekki Phase 1 Terrace</Heading>
          
          <Flex align="center" color="gray.500" fontSize="sm" gap="1">
            <MapPin size={16} />
            <Text>Lekki, Lagos</Text>
          </Flex>

          <Box bg="blue.50" p="5" rounded="2xl">
            <Text fontSize="xs" fontWeight="black" color="blue.700" mb="3" letterSpacing="wider">
              YOUR SQUAD PROGRESS
            </Text>
            
            {/* Note: In v3, Progress structure changed slightly */}
            <Progress.Root value={65} colorPalette="blue">
              <Flex justify="space-between" mb="2">
                <Text fontSize="sm" fontWeight="bold">₦3,250,000 / ₦5,000,000</Text>
              </Flex>
              <Progress.Track bg="blue.100" h="2.5">
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>

            <Text mt="3" fontSize="xs" color="gray.600">
              Only <strong>₦1,750,000</strong> left to secure this house!
            </Text>
          </Box>

          <Button bg="blue.600" color="white" size="lg" width="full" height="60px" rounded="xl" _hover={{ bg: 'blue.700' }}>
            Join the Squad
          </Button>
        </Stack>
      </Stack>
    </Box>
            </>
  );
}