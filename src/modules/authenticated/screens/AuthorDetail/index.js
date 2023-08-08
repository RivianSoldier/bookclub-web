import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAuthorDetail } from 'services/api/requests'

export const AuthorDetailScreen = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(
    ['authorDetail', id],
    () => getAuthorDetail(id),
    {
      enabled: !!id
    }
  )

  return (
    <Flex flexDir="column" overflowX="hidden">
      <NavBar />
      <Flex
        flexDir={['column', 'row']}
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
        mt={['24px', '48px']}
        w="100vw"
        maxW="100vw"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          h={['276px', '358px']}
          w={['190px', '290px']}
          backgroundImage={`${data?.data?.avatar_url}`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={['12px']}
        />
        <Flex
          mt={['24px', '0px']}
          w={['100%', '70%']}
          mx={['0px', '48px']}
          flexDir="column"
        >
          <Text.ScreenTitle textAlign={['center', 'start']} fontSize="1.5rem">
            {data?.data?.name}
          </Text.ScreenTitle>

          <Text.ScreenTitle mt="16px">Sobre o(a) autor(a)</Text.ScreenTitle>

          <Text mt="4px" fontSize="0.75rem" color="brand.greyDark">
            {data?.data?.bio}
          </Text>
        </Flex>
      </Flex>
      <BookList
        title="Livros do(a) autor(a)"
        data={data?.data?.book}
        isLoading={isLoading}
      />
    </Flex>
  )
}
