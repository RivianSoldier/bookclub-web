import { Flex } from '@chakra-ui/react'
import { NavBar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        mt="48px"
        h="200px"
        w="100%"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          h="100%"
          w="100%"
          backgroundImage="url(/img/banner.svg)"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="24px"
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
