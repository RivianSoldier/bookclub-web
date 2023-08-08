import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast
} from '@chakra-ui/react'
import { Text, Button } from 'components/atoms'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { updateUserCall } from 'services/api/requests'

export const PasswordModal = ({ onClose }) => {
  const toast = useToast()

  const mutation = useMutation((data) => updateUserCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar senha.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Senha atualizada com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
    }
  })

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .min(6, 'Confirmar a senha deve ter no mínimo 6 caracteres.')
        .required('Confirmar a senha é obrigatória.')
        .oneOf([Yup.ref('password')], 'As senhas não são iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Alterar a Senha</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
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
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
            w="100%"
            mt={['64px']}
          >
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
