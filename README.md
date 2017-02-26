# QScript
Quick NodeJS Script

Viết script NodeJS nhanh với QScript

**[English]**

## Basic

### Install

```
$ npm install -g qscript
```

### Usage

```
$ qscript <path>
```

## Demo

**test01.js**

```js
log('Hello, World!');
logF('Hello, World!');
```

Run this code

```
$ qscript test.js
```

Result [Console]

```
Hello, World!
```

Result [log.txt]

```
QScript v0.0.1 [https://github.com/vuanhhaogk/QScript.git]
[2017/02/26 15:50:38] Hello, World!

```

## API

### Global

**log("text to console")**

**logF("text to 'log.txt'")**

**require("core|file|module")**

### Core

#### CLI

```js
const CLI = require('qs.cli');
```

```
CLI
.question('question to ask!')
.then(function(answer){
    // code here
})
```

```
var bar = CLI.progress({
        label: "<label>", // option, default ''
        percent: "<percent>", // option, default 0
        barwidth: <barwidth>, // option, default 30
        textwidth: <textwidth>, // option, default 30
        complete: <char>, // option, default =,
        imcomplete: <char>, // option, default ' '
    });

bar.update([percent], [label]);
bar.end([percent], [label]);
```


## License

MIT

***

**[Tiếng Việt]**

## Cơ bản

### Cài đặt

```
npm install -g qscript
```

## Giấy phép

MIT
