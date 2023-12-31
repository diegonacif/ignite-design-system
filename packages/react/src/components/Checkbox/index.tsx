import { Check } from '@phosphor-icons/react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps, ElementType } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  as?: ElementType
}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
