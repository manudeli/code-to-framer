import { addPropertyControls, ControlType } from 'framer'
import styled from 'styled-components'
import getFramerDataHDS from './helpers/getFramerDataHDS'

enum JustifyContent {
  'space-between' = 'space-between',
  '' = '',
}

interface Props {
  backgroundColor: string
  justifyContent: JustifyContent
  children: { title: string }[]
}

export const Button = (props: Props) => {
  const { backgroundColor = 'red', children } = props
  return (
    <StyledDiv data-hds={getFramerDataHDS(props, Button)}>
      <button onClick={() => console.log('hi')} style={{ backgroundColor }}>
        text hihihihijonghyeon{children}
      </button>
      <button onClick={() => console.log('hi')} style={{ backgroundColor }}>
        text{children}
      </button>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: red;
  padding: 12px;
`

addPropertyControls(Button, {
  children: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  backgroundColor: {
    type: ControlType.String,
  },
  justifyContent: {
    type: ControlType.Enum,
    options: [JustifyContent['space-between'], JustifyContent['']],
  },
})
