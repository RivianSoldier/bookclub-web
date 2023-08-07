import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'

export const SearchBar = ({ query, setQuery }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const checkSearchScreen = () => {
    if (location.pathname !== '/search') {
      navigate('/search')
    }
  }
  return (
    <Flex w="45%" h="52px" bg="brand.greyLight" borderRadius="12px">
      <InputGroup>
        <InputLeftElement h="100%">
          <SearchIcon color="brand.greyDark" />
        </InputLeftElement>
        <Input
          onFocus={() => checkSearchScreen()}
          value={query || ''}
          onChange={(e) => (setQuery ? setQuery(e.target.value) : {})}
          borderWidth="0"
          w="100%"
          h="100%"
          placeholder="Digite o nome do livro ou autor"
          _placeholder={{ color: 'brand.greyDark' }}
          focusBorderColor="transparent"
        />
      </InputGroup>
    </Flex>
  )
}
