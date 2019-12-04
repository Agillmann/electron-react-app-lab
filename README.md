# Electron <img src="https://electronjs.org/images/favicon.ico" width="32"> React <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-32.png" width=32> Parcel <img src="https://parceljs.org/assets/parcel@2x.png" width=32> 

Bolierplate code for building multi-platform, production ready desktop apps using [Electron](https://electronjs.org/), [React](https://reactjs.irg), [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) and [Parcel](https://parceljs.org/).

Also contains CSS styling using [Material-UI](https://github.com/mui-org/material-ui) and [React-Transition-Group](https://reactcommunity.org/react-transition-group/) for animations.

## Scripts

`yarn start` will start the Electron app and the React app at the same time.  
`yarn build` will build the React app and package it along the Electron app.

## Build 

### Linux
```json=
"scripts": {
    "electron-build": "electron-builder --linux deb tar.xz"
}
```

### Windows
```json=
"scripts": {
    "electron-build": "electron-builder --windows nsis:ia32"
}
```

### macOS
```json=
"scripts": {
    "electron-build": "electron-builder -mwl"
},
"build": {
    "appId": "com.exemple",
    "files": [
      "src/electron.js",
      "src/assets/*",
      "build/**/*"
    ],
    "mac": {
      "target": "dmg",
      "icon": "src/assets/logo.png"
    },
    "win": {
      "target": "nsis",
      "icon": "src/assets/logo.png"
    },
    "linux": {
      "target": "deb",
      "icon": "src/assets/logo.png",
      "category": "Development"
    }
  },
```
## Just React

`yarn react-start` will start the React app at http://localhost:3000.  
`yarn react-build` will build the React app and package it in build folder.
