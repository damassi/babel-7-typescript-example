import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './components/App'

type BarProps = {
  a: string,
  b: string
}

type Foo = {
  name: string,
  foo (): string,
  bar (props: BarProps): number
}

const props: Foo = {
  name: 'world',
  foo: () => 'hi',
  bar: () => 2
}

ReactDOM.render(<App {...props} />, document.body.appendChild(document.createElement('div')))

export const test = {
  isJestWorking: true
}
