import { useState } from 'react'
import { Text } from 'components/atoms'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <>
    <ChakraInput
      h="3.5rem"
      fontSize="1rem"
      focusBorderColor="brand.primary"
      {...props}
    />
    {props.error && <Text color="red">{props.error}</Text>}
  </>
)

Input.Password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <InputGroup h="3.5rem" size="md" {...props}>
        <Input
          id={id}
          namem={name}
          onChange={onChange}
          value={value}
          focusBorderColor="brand.primary"
          pr="4.5rem"
          fontSize="1rem"
          type={show ? 'text' : 'password'}
          placeholder="***************"
        />
        <InputRightElement h="3.5rem">
          <Button
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            h="100%"
            size="sm"
            onClick={handleClick}
          >
            {show ? (
              <ViewOffIcon boxSize="1.2rem" color="brand.primary" />
            ) : (
              <ViewIcon boxSize="1.2rem" color="brand.primary" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Text color="red">{props.error}</Text>}
    </>
  )
}

Input.Password.displayName = 'InputPassword'
