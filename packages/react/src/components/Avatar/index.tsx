import { User } from '@phosphor-icons/react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps, ElementType } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  as?: ElementType
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
