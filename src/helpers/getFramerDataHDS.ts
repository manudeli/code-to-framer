import React from 'react'

const getFramerDataHDS = <P>(
  props: { [prop: string]: any },
  component: React.ComponentType<P>
) => {
  const dataHDS = JSON.stringify({
    name: '⭐️' + component.name,
    props: {
      ...props,
      children: '⭐️', // TODO: children 필요한 지 검토하기
    },
  })
  console.log(JSON.parse(dataHDS))
  return dataHDS
}

export default getFramerDataHDS
