import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const TermsModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Termos de Uso</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            semper magna. Cras nec magna a nibh tincidunt malesuada. In hac
            habitasse platea dictumst. Nam semper odio et velit viverra
            vehicula. Nam vel urna quis nunc dignissim efficitur. Cras in
            commodo sem, non tristique lorem. Ut eget faucibus quam. Mauris
            pharetra consectetur molestie. Etiam ac cursus diam, sed accumsan
            ligula. Aenean eu sodales nisi. Sed enim ex, maximus vel ex eu,
            laoreet luctus ligula. Etiam diam tellus, tincidunt eget faucibus
            eget, molestie venenatis leo. Cras ut ante massa. Mauris eleifend
            justo eu varius placerat. Vivamus eleifend ultrices felis. Mauris
            nulla augue, ornare sit amet consectetur quis, dictum eget nibh.
            Aenean vitae consectetur leo, non elementum felis. Curabitur sed
            risus mi. Nulla quis semper nisl. Quisque in augue eget magna
            porttitor rutrum. Praesent malesuada tempor tellus faucibus feugiat.
            Nulla sed elit ac urna pellentesque dignissim eget non sem.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
