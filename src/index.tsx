import ReactDOM from 'react-dom/server'
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
  name: 'hi',
  foo: () => 'hi',
  bar: () => 2
}

const reactOutput = ReactDOM.renderToString(<App {...props} />)
console.log(reactOutput)

export const test = {
  isJestWorking: true
}
