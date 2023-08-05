import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => (
  <ChakraButton
    fontWeight="bold"
    fontSize="1rem"
    borderRadius="16px"
    h="3.5rem"
    bg={secondary ? 'brand.greyDark' : 'brand.primary'}
    _hover={{ bg: secondary ? 'brand.greyDark' : 'brand.primary' }}
    textColor={secondary ? 'brand.white' : 'brand.black'}
    {...props}
  >
    {children}
  </ChakraButton>
)
