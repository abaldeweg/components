# baldeweg/components

UI Components

## Requirements

- NodeJS 12LTS
- Yarn

## Getting Started

Install the package with the following command.

```shell
yarn add @baldeweg/components
```

Then you can add this to your `main.js`.

```js
import components from '@baldeweg/components'

Vue.use(components)
```

Now you can choose rom the components.

## Components

### notification

Props

- type - neutral, warning, caution, success (default: neutral)
- title - string
- hidable - bool (default: false)

Slot

default - Content

### notification-bar

### app

Slot

default - Content

### content

Slot

default - Content

### masthead

Slot

default - Logo

### divider

### b-code

Slot

default - Content

### b-container

Props

- size - l, m, s - (default l)

Slots

- default - Content

### b-search

Props

- placeholder - String (default: Search)
- button - String (default: Search)

### b-slider

Slots

- default - Content

### b-spinner

Props

- size - l, m, s (default: l )

### b-table

Slots

- default - Content

### b-form

Slots

- default - Content

## Example

```html
<notification type="neutral" title="Title" hidable>
  This is a notification.
</notification>
```

## CLI

- yarn watch - Starts the development environment.
- yarn test - Runs the unit tests.
