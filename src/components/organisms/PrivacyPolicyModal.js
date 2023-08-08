import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Políticas de Privacidade</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
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
            Nulla sed elit ac urna pellentesque dignissim eget non sem.Etiam
            diam tellus, tincidunt eget faucibus eget, molestie venenatis leo.
            Cras ut ante massa. Mauris eleifend justo eu varius placerat.
            Vivamus eleifend ultrices felis. Mauris nulla augue, ornare sit amet
            consectetur quis, dictum eget nibh. Aenean vitae consectetur leo,
            non elementum felis. Curabitur sed risus mi. Nulla quis semper nisl.
            Suspendisse sit amet urna ac nibh sagittis varius. Praesent cursus
            eleifend rutrum. In urna libero, malesuada laoreet urna ut,
            tristique efficitur ipsum. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Nam mattis, purus sit
            amet cursus molestie, augue erat ullamcorper lectus, non placerat mi
            enim eget massa. Nam fringilla pretium dolor nec fringilla. Ut
            vulputate auctor ex, tincidunt commodo ex luctus luctus. Donec
            commodo, tellus sed egestas elementum, est tortor elementum nisl, in
            tempor metus dui eu nisi. Nulla nec risus ac sem facilisis
            condimentum. Quisque ultricies ipsum mi, ac fermentum nunc elementum
            ut. Cras rhoncus urna eros, vel feugiat justo scelerisque sed.
            Nullam aliquet nunc eu eros mattis ultrices.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
