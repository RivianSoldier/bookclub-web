import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'

export const NavBar = ({ query, setQuery }) => {
  const navigate = useNavigate()
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
        <UserMenu />
      </Flex>
    </Flex>
  )
}
