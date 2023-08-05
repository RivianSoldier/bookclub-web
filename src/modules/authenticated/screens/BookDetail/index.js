import { Flex, useToast } from '@chakra-ui/react'
import { NavBar, Text, Button, CategoryList } from 'components'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import {
  getBookDetail,
  addBookToFavorite,
  deleteBookFromFavorite
} from 'services/api/requests'

export const BookDetailScreen = () => {
  const toast = useToast()
  const { id } = useParams()
  const { data, refetch, isLoading } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )

  const addFavoriteMutation = useMutation((data) => addBookToFavorite(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao adicionar aos favoritos!',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro adicionado aos favoritos com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      refetch()
    }
  })

  const deleteFavoriteMutation = useMutation(
    (data) => deleteBookFromFavorite(data),
    {
      onError: (error) => {
        toast({
          title: 'Erro ao remover livro dos favoritos!',
          description:
            error?.response?.data?.error || 'Por favor, tente novamente.',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Livro removido dos favoritos com sucesso!',
          status: 'success',
          duration: 6000,
          isClosable: true
        })
        refetch()
      }
    }
  )

  const handleButtonClick = () => {
    if (data?.data?.favorite) {
      deleteFavoriteMutation.mutate(data?.data?.favorite?.id)
    } else {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }
  }

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
          h={['256px', '358px']}
          w={['170px', '238px']}
          backgroundImage={`${data?.data?.book?.cover_url}`}
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
            {data?.data?.book?.name}
          </Text.ScreenTitle>
          <Text
            mt="6px"
            fontSize="1rem"
            color="brand.greyDark"
            textAlign={['center', 'start']}
          >
            {data?.data?.book?.author?.name}
          </Text>
          <Text.ScreenTitle mt="16px">Informações</Text.ScreenTitle>
          <Flex
            w="100%"
            mt="4px"
            flexDir={['column', 'row']}
            justifyContent={['flex-start', 'space-between']}
          >
            <Text fontSize="0.875rem" color="brand.greyDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text
              fontSize="0.875rem"
              color="brand.greyDark"
              mt={['4px', '0px']}
            >
              Páginas: {data?.data?.book?.pages}
            </Text>
            <Text
              fontSize="0.875rem"
              color="brand.greyDark"
              mt={['4px', '0px']}
            >
              Ano de lançamento:{' '}
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="16px">Sinopse</Text.ScreenTitle>
          <Text mt="4px" fontSize="0.75rem" color="brand.greyDark">
            {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex
          justifyContent={['center', 'flex-start']}
          alignItems={['center', 'flex-start']}
          w={['100%', 'auto']}
          mt={['24px', '0px']}
        >
          <Button
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              deleteFavoriteMutation.isLoading
            }
            secondary={data?.data?.favorite}
            onClick={() => handleButtonClick()}
          >
            {data?.data?.favorite
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList
        title="Livros relacionados"
        categoryId={data?.data?.book?.category?.id}
      />
    </Flex>
  )
}
