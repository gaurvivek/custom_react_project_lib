# custom_react_project_lib

Customisable componentas for react

[![](https://badgen.net/bundlephobia/minzip/react-dropdown-select)](https://bundlephobia.com/package/custom_react_project_lib)
[![](https://img.shields.io/npm/v/custom_react_project_lib.svg)](https://www.npmjs.com/package/custom_react_project_lib)
[![](https://github.com/gaurvivek/custom_react_project_lib)](https://github.com/gaurvivek/custom_react_project_lib)

### Features

- configurable via `prop`s
- total custom components overrides for all internals via render prop callbacks (with access to internal props, state and methods)
- stylable via css (or custom components)
- portal support for rendering button outside local DOM tree. e.g. in `document.body`
- auto position
- small bundle size

### Installation

> `npm install --save custom_react_project_lib`
### Web site

[Web site, docs and demo](https://github.com/gaurvivek/custom_react_project_lib)

### Usage

import:

`import { FormButtonCustom } from 'custom_react_project_lib';`

and use as:

```jsx
<FormButtonCustom variant={"secondary"} showLoader={isFormSubmit} />
```

> **all** props are optional
### Help and Contributions

#### How to help/contribute

- fix issues, pull request are very welcome
- write, improve docs
- write tests (we use jest)
- suggest features and improvements

# API

### Component props

| Prop                                                                                        | Type        | Default        | Description                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ----------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| size                                                                                      | string       | 'md'             | size strings values                                                                                                                        |
| otherProps                                                                                     | array       | []             | Available options, (option with key `disabled: true` will be disabled)                                                                 |
| disabled                                                                                    | bool        | false          | If true, button will always stay open                                                                           |

### License

[MIT](https://github.com/sanusart/react-dropdown-select/blob/master/LICENSE)