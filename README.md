[![Build Status](https://travis-ci.org/damassi/babel-7-typescript-example.svg?branch=master)](https://travis-ci.org/damassi/babel-7-typescript-example)

# TypeScript + Babel 7

Example TypeScript project built on top of new Babel 7 features. Includes React 16, Jest and Enzyme (for tests). Since the TypeScript compiler is no longer required to compile sources you can keep your existing Babel pipeline and instead rely on editor-based type-checking or `tsc`.

## Installation

```sh
git clone https://github.com/damassi/babel-7-typescript-example && cd babel-7-typescript-example
yarn install
yarn start
yarn test:watch
yarn typecheck
```

**For a more complete example that uses Webpack see [this fork](https://github.com/emakina-cee-oss/babel-7-typescript-example/tree/webpack-support) -- thanks @flobacher.**

If using VSCode, make sure to install the recommended extensions.

## Example

```jsx
// App.tsx
import React, { Component } from 'react'

interface Props {
  name: string
}

export const App extends Component<Props> {
  render () {
    return (
      <div>
        Hi {this.props.name} from .tsx!
      </div>
    )
  }
}

// index.ts
import ReactDOM from 'react-dom/server'
import { App } from './components/App'

console.log(ReactDOM.renderToString(<App name='leif' />))
```

```sh
yarn build (or babel src --out-dir dist --extensions '.ts,.tsx')
```
