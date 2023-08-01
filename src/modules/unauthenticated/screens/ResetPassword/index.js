import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(4, 'O token deve conter 4 caracteres.')
        .required('O token é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter no mínimo 6 caracteres.')
        .required('Confirmar a senha é obrigatória.')
        .oneOf([Yup.ref('password')], 'As senhas não são iguais.')
    }),
    onSubmit: (data) => {
      navigate('/login')
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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="24px">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input
            id="token"
            name="token"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            mt="24px"
            placeholder="Ex: 0000"
            maxLength={4}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="24px"
            placeholder="Nova senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            mt="24px"
            placeholder="Confirmar nova senha"
          />

          <Button mb={['24px', '0px']} mt="24px" onClick={handleSubmit}>
            Salvar
          </Button>
          <Link.Action
            mt={['8px', '48px']}
            text="Não recebeu o código?"
            actionText="Clique aqui para reenviar."
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
