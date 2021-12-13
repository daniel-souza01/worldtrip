import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const path = false

  return (
    <Box as="header" w="100%" h="24">
      <Flex maxW="72.5rem" h="inherit" align="center" m="auto">
        {path && (
          <Link href="/">
            <Image src="voltar.svg" alt="voltar para início" />
          </Link>
        )}
        <Image src="logo.svg" alt="logo" m="auto" />
      </Flex>
    </Box>
  )
}
