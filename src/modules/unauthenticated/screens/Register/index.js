import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve conter no mínimo 3 caracteres.')
        .required('Nome é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter no mínimo 6 caracteres.')
        .required('Confirmar a senha é obrigatória.')
        .oneOf([Yup.ref('password')], 'As senhas não são iguais.')
    }),
    onSubmit: (data) => {
      console.log({ data })
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            mt="24px"
            placeholder="Nome completo"
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="16px"
            placeholder="E-mail"
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="16px"
            placeholder="Senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            mt="16px"
            placeholder="Confirmar senha"
          />

          <Button mb={['24px', '0px']} mt="24px" onClick={handleSubmit}>
            Cadastrar
          </Button>
          <Link.Action
            mt={['8px', '48px']}
            onClick={() => navigate('/')}
            text="Já possui uma conta?"
            actionText="Faça login aqui."
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
