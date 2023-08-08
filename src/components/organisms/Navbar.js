import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'
import { UserModal } from './UserModal'
import { PasswordModal } from './PasswordModal'
import { TermsModal } from './TermsModal'
import { PrivacyPolicyModal } from './PrivacyPolicyModal'
import { useDispatch } from 'react-redux'
import { setAll } from 'services/store/slices/user'

export const NavBar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()
  const onCloseModal = () => {
    setShowModal(null)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    localStorage.clear()
    dispatch(
      setAll({
        user: null,
        token: null
      })
    )
    navigate('/')
  }
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      overflowX="hidden"
      paddingTop="24px"
    >
      <Image
        src="/img/logo.svg"
        alt="BookClub logo"
        w={['90px', '160px']}
        h="48px"
        cursor="pointer"
        onClick={() => navigate('/home')}
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        display={['none', 'flex']}
        w={['90%', '100%']}
      >
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
      <Flex w={['30%', '40%']} alignItems="end" justifyContent="flex-end">
        <UserMenu onLogout={onLogout} setShowModal={setShowModal} />
        {showModal === 'user' && <UserModal onClose={onCloseModal} />}
        {showModal === 'password' && <PasswordModal onClose={onCloseModal} />}
        {showModal === 'terms' && <TermsModal onClose={onCloseModal} />}
        {showModal === 'privacy-policy' && (
          <PrivacyPolicyModal onClose={onCloseModal} />
        )}
      </Flex>
    </Flex>
  )
}
