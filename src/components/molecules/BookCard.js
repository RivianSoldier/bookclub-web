import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex
      mr="16px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        backgroundImage={cover_url}
        backgroundSize="cover"
        backgroundPosition="center"
        h={['180px', '230px']}
        w={['120px', '154px']}
        borderRadius={['8px', '12px']}
      />
      <Text
        noOfLines={1}
        textAlign="center"
        mt="8px"
        fontSize="0.75rem"
        fontWeight="600"
      >
        {name}
      </Text>
      <Text textAlign="center" mt="4px" fontSize="0.625rem">
        {author?.name}
      </Text>
    </Flex>
  )
}
