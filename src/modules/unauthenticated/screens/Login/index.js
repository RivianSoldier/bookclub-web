import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navigate = useNavigate()
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
      console.log({ data })
    }
  })

  console.log({ values, errors })

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
            value={values.email}
            mt="24px"
            placeholder="email@exemplo.com"
            onChange={handleChange}
            error={errors.email}
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
          <Button onClick={handleSubmit} mb={['24px', '0px']} mt="24px">
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
        backgroundImage="url(/img/auth_background.svg)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
