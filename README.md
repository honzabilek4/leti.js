# leti.js
Lightweight and easily customizable notification library.

## Installation
```bash
npm install leti.js --save-dev
```

## Usage

Create Leti instance.

```js
const leti = new Leti();
```

Now you can simply call one of the default `success`, `error`, `warning`, `info` methods.

```js   
    leti.error("Oops, there was an error.");   
    //OR
    leti.error({
        title: "Something went wrong..",
        message: "We had some trouble while processing your request"
    });
```

You can create you own types of notification methods with different settigns passing a `types` Object into the constructor.

```js
const leti = new Leti({
    types: {
        alert: {
            delay: 2000,
            icon: "alert-icon",
            position: "top right",
        },
        push: {} //use all defaults
    },
})
```

## Options 

Options can be treated as global by placing them on the root level of the options object and then overriden by a specific notification type.

```js
const leti = new Leti({
    position: "botom right", // default position
    types: {
        push: {
            position: "top right" // override positioning
        }
    }
})
```
| Option | Type | Default | Details |
| ------ | ---- | ------- | ------- |
| position | String | bottom right | [top,bottom] [left,right,center] |
| delay | Number | 2000 | Number of miliseconds the notification should be visible || icon | String |  - | Icon class. |

## License

MIT
