import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { loginCall } from 'services/api/requests'
import { saveItem } from 'services/storage'
import { setAll } from 'services/store/slices/user'

export const LoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const mutation = useMutation((newUser) => loginCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha ao realizar login.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Login feito com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      saveItem('@bookclub_token', data?.data?.token)
      dispatch(
        setAll({
          token: data?.data?.token,
          user: data?.data?.user
        })
      )
      navigate('/home')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems="center"
        justifyContent="center"
        padding={['24px', '48px', '80px', '0px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100vh"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '84%']}>
          <Image src="/img/logo.svg" alt="BookClub logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="24px"
            placeholder="email@exemplo.com"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            mt="16px"
            placeholder="************"
            onChange={handleChange}
            error={errors.password}
          />
          <Flex
            mt="8px"
            w="100%"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu sua senha?
            </Link>
          </Flex>
          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mb={['24px', '0px']}
            mt="24px"
          >
            Login
          </Button>
          <Link.Action
            mt={['8px', '48px']}
            onClick={() => navigate('/signup')}
            text="Não possui uma conta?"
            actionText="Cadastre-se aqui."
          />
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '60%']}
        h="100vh"
        backgroundImage="url(/img/auth_background.png)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
