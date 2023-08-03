import { Text } from 'components/atoms'
import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'

export const MenuItem = ({ icon, text, divider }) => (
  <ChakraMenuItem
    h="48px"
    borderBottomWidth={divider ? '2px' : '0px'}
    borderBottomStyle="solid"
    borderBottomColor="brand.greyLight"
  >
    <Icon color="brand.greyDark" boxSize="18px" mr="8px" as={icon} />
    <Text fontWeight="600" size="14px" color="brand.greyDark">
      {text}
    </Text>
  </ChakraMenuItem>
)
