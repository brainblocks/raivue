# Raivue

[![npm](https://img.shields.io/npm/v/raivue.svg)](https://www.npmjs.com/package/raivue) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js plugin for accepting RaiBlocks payments using [Brainblocks](https://brainblocks.io/)

## Installation

```bash
# npm
npm install --save raivue

# yarn
yarn add raivue
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import Raivue from 'raivue'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import 'raivue/dist/raivue.css'

Vue.use(Raivue)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="raivue/dist/raivue.css"></link>
<script src="raivue/dist/raivue.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/raivue/dist/raivue.css"></link>
<script src="https://unpkg.com/raivue"></script>
```

### Vue Component Usage
```html
<!-- amount must use v-bind(colon is shorthand) to pass as a Number -->
<!-- amount is in rai, not XRB. -->
<template>
  <div>
    <RaiPayment
      address="xrb_3ui4sg4jjdxsfwshjcbkjnthdzmtbgxe7pa597cxsa4aamkkj3b8dmeome4i"
      :amount="250000"
      :onSuccess="successCallback">
    </RaiPayment>
  </div>
</template>
<script>
  export default {
    name: 'RaivueTest',
    methods: {
      successCallback (data) {
        console.log('Payment successful!', data.token)
      }
    }
  }
</script>
```

## Development

### Update Git Submodules
This is required to pull down the latest Brainblocks code.
```bash
npm run submodules:update
```

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepare` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)


## Support 💙💚
Donation Address: xrb_3ui4sg4jjdxsfwshjcbkjnthdzmtbgxe7pa597cxsa4aamkkj3b8dmeome4i