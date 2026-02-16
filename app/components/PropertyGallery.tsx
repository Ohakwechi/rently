    // components/PropertyGallery.tsx
'use client'

import { Box, Image, Text, Flex, Badge, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'

export default function PropertyGallery() {
  const rooms = [
    { id: 1, name: 'Parlor (Living Area)', url: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9', desc: 'Spacious with POP ceiling' },
    { id: 2, name: 'Master Bedroom', url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af', desc: 'En-suite with walk-in closet' },
    { id: 3, name: 'Kitchen', url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f', desc: 'Fully fitted with heat extractor' },
    { id: 4, name: 'Bedroom 2', url: 'https://images.unsplash.com/photo-1505693419173-42b9258a03b0', desc: 'Natural lighting, poolside view' },
  ]

  const [activeRoom, setActiveRoom] = useState(rooms[0])

  return (
    <>
    <Box w="full" bg="white" rounded="3xl" shadow="md" overflow="hidden" p="4">
      {/* Featured View */}
      <Box position="relative" mb="4">
        <Image 
          src={activeRoom.url} 
          alt={activeRoom.name}
          w="full"
          h="350px"
          objectFit="cover"
          rounded="2xl"
          transition="all 0.3s ease"
          />
        
        <Box 
          position="absolute" 
          bottom="4" 
          left="4" 
          bg="blackAlpha.700" 
          backdropFilter="blur(10px)"
          p="3" 
          rounded="xl" 
          color="white"
          >
          <Text fontWeight="bold" fontSize="lg">{activeRoom.name}</Text>
          <Text fontSize="xs" opacity="0.8">{activeRoom.desc}</Text>
        </Box>
      </Box>

      {/* Thumbnail Selection */}
      <SimpleGrid columns={4} gap="2">
        {rooms.map((room) => (
            <Box 
            key={room.id}
            cursor="pointer"
            onClick={() => setActiveRoom(room)}
            opacity={activeRoom.id === room.id ? 1 : 0.5}
            transition="opacity 0.2s"
            _hover={{ opacity: 1 }}
            >
            <Image 
              src={room.url} 
              h="70px" 
              w="full" 
              objectFit="cover" 
              rounded="lg" 
              border={activeRoom.id === room.id ? "2px solid" : "none"}
              borderColor="blue.500"
              />
          </Box>
          
        ))}

      </SimpleGrid>
    </Box>

        </>
    )
}
    

    