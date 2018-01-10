[![Build Status](https://travis-ci.org/damassi/babel-7-typescript-example.svg?branch=master)](https://travis-ci.org/damassi/babel-7-typescript-example)

# TypeScript + Babel 7 + Webpack

Example TypeScript project built on top of new Babel 7 features. Includes React 16, Jest and Enzyme (for tests).
Bundeling is done via webpack. Typechecking and linting are done on seperate processes, so runs faster
on modern multicore cpus. Also JS is always updated, even if Typechecking or linting throws errors.
This is not the case for production builds.
For development HMR is on per default, so the dev-experience is as smooth as possible.


## Installation

```sh
git clone https://github.com/damassi/babel-7-typescript-example && cd babel-7-typescript-example
yarn install
```

## Development
```sh
yarn start
yarn test:watch
```

## Production build
```sh
yarn build
```


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
yarn build
```
