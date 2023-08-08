import { Text, MenuItem } from 'components/atoms'
import { Avatar, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkStar } from 'react-icons/bs'
import { BiUser, BiCheckShield, BiFile, BiLogOut } from 'react-icons/bi'
import { HiOutlineClipboard } from 'react-icons/hi'

export const UserMenu = ({ setShowModal }) => {
  const userStore = useSelector((state) => state.user)
  const navigate = useNavigate()

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkStar,
      text: 'Favoritos',
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      icon: BiUser,
      text: 'Dados pessoais',
      divider: false,
      onClick: () => setShowModal('user')
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: 'Alterar senha',
      divider: true,
      onClick: () => setShowModal('password')
    },
    {
      id: 3,
      icon: BiFile,
      text: 'Termos de uso',
      divider: false,
      onClick: () => navigate('/')
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: 'Política de privacidade',
      divider: true,
      onClick: () => setShowModal('privacy-policy')
    },
    {
      id: 5,
      icon: BiLogOut,
      text: 'Logout',
      divider: false,
      onClick: () => navigate('/')
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
            w={['36px', '48px']}
            h={['36px', '48px']}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr={['6px', '12px']}
          />
          <Flex display={['none', 'flex']}>
            <Text fontSize="1rem" fontWeight="bold" maxLength="40px">
              {userStore?.user?.name}
            </Text>
          </Flex>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem
            onClick={() => item.onClick()}
            key={`menu_item_${item.id}`}
            {...item}
            h="48px"
          />
        ))}
      </MenuList>
    </Menu>
  )
}
