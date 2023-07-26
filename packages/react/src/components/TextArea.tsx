import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus-within': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
