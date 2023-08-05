import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop="24px"
    >
      <Image
        src="/img/logo.svg"
        alt="BookClub logo"
        w={['100px', '160px']}
        h="48px"
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        display={['none', 'flex']}
        w={['90%', '100%']}
      >
        <SearchBar />
      </Flex>
      <Flex w={['30%', '40%']} alignItems="end" justifyContent="flex-end">
        <UserMenu />
      </Flex>
    </Flex>
  )
}
