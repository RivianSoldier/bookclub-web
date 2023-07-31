import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="1rem"
    borderRadius="16px"
    h="3.5rem"
    bg="brand.primary"
    _hover={{ bg: 'brand.primary' }}
    {...props}
  >
    {children}
  </ChakraButton>
)
