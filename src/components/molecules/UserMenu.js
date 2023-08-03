import { Text, MenuItem } from 'components/atoms'
import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkStar } from 'react-icons/bs'
import { BiUser, BiCheckShield, BiFile, BiLogOut } from 'react-icons/bi'
import { HiOutlineClipboard } from 'react-icons/hi'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkStar,
      text: 'Favoritos',
      divider: false
    },
    {
      id: 1,
      icon: BiUser,
      text: 'Dados pessoais',
      divider: false
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: 'Alterar senha',
      divider: true
    },
    {
      id: 3,
      icon: BiFile,
      text: 'Termos de uso',
      divider: false
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: 'Política de privacidade',
      divider: true
    },
    {
      id: 5,
      icon: BiLogOut,
      text: 'Logout',
      divider: false
    }
  ]

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
          {menuOptions.map((item) => (
            <MenuItem key={`menu_item_${item.id}`} {...item} h="48px" />
          ))}
        </MenuList>
      </MenuButton>
    </Menu>
  )
}
