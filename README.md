# NOT DECEPTION

Your eyes have not decieved you, this is the better game that's not the game we're talking about. Don't look over there young one! Your future is over here!

## Installation

```
yarn install
yarn start
```

### Routing

[React Router](https://reactrouter.com/) handles all the routing within the app. In it's current form, the switching is handled within `App.js` and displayed to the user through `components/Navigation.js`

### Styling Components

Styling is done via [Emotion](https://emotion.sh/docs/introduction). A basic example imports styled then created variables for each DOM element:

```
import styled '@emotion/styled'

const NavigationItem = styled.li`
  background-color: hotpink;
`
```

Naming should be descriptive and follow a heirarchical pattern to help describe the relationship between DOM elements.

### API Config

The frontend uses Axios to communicate with the backend. Every request the app sends can be globally configured under `utilities/api.js`.