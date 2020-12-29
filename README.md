# Wellcome to Moonbank 🤗

## Virtual Wallet with Firebase and React-Native

### Installation

`npm i` / `npm install`

### Visualization

You can run the App in three ways:

- Your Phone _(Downloading the Expo App from PlayStore)_
- Your Web Browser _(`expo start`)_
- An Android simulator like Android Studio or Visor _(`expo start`)_

---

### Extra Configuration [ only if you want to run the App on the Web browser _(*_Not recommended_*)_ ]

Go to the following route in node_modules and edit the FlipCard.js file with this changes:

> `node_modules\react-native-flip-card\lib\FlipCard.js`

1. Paste on the top this code:

```javascript
import * as ReactNative from "react-native-web";
const PropTypes = require("prop-types");
ReactNative.Text.propTypes = { style: PropTypes.any };
ReactNative.View.propTypes = { style: PropTypes.any };
ReactNative.Image.propTypes = { style: PropTypes.any };
ReactNative.ViewPropTypes = { style: PropTypes.any };
```

2. Comment the following line:

```javascript
import PropTypes from "prop-types";
```

```javascript
//import PropTypes from "prop-types";
```

#### 📹 Workflow video of [MoonBank Wallet](https://youtu.be/L2yQqAn2gy4)

<a href='https://youtu.be/L2yQqAn2gy4' target='_blank'>
  <img width='50%' src='./assets/screens.jpeg' alt='MoonBank' />
</a>
