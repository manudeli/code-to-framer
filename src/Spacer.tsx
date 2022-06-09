import React from 'react'
import { addPropertyControls, ControlType } from 'framer'
import styled from 'styled-components'
import getFramerDataHDS from './helpers/getFramerDataHDS'

enum Type {
  'vertical' = 'vertical',
  'horizontal' = 'horizontal',
}

interface Props {
  type: Type
  gap: number
  align: string
  children: React.ReactNode
}

export const Spacer = (props: Props) => {
  const { type = Type.vertical, gap, align, children } = props

  return (
    <StyledSpacer
      data-hds={getFramerDataHDS(props, Spacer)}
      type={type}
      gap={gap}
      align={align}
    >
      {children}
    </StyledSpacer>
  )
}

const StyledSpacer = styled.div<Props & { 'hds-props'?: string }>`
  display: flex;
  flex-direction: ${({ type }) => type === Type.vertical && 'column'};
  justify-content: space-between;
  align-items: ${({ align }) => align};
  gap: ${({ theme, gap = 0 }) =>
    typeof gap === 'string' ? theme.gaps[gap] : `${gap}px`};
`

addPropertyControls(Spacer, {
  children: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  type: { type: ControlType.Enum, options: [Type.horizontal, Type.vertical] },
  gap: { type: ControlType.Number },
})
