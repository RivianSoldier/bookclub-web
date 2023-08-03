import { Text } from 'components/atoms'
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Avatar
            color="brand.black"
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            size="md"
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr="12px"
          />
          <Text fontSize="1.25rem" fontWeight="bold" maxLength="40px">
            {userStore?.user?.name}
          </Text>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
        <MenuList>
          <MenuItem>Favoritos</MenuItem>
          <MenuItem>Dados Pessoais</MenuItem>
        </MenuList>
      </MenuButton>
    </Menu>
  )
}
