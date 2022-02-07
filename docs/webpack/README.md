---
# navbar: false
# 自动生成sideBar
date: 2021-12-12
tags:
  - Webpack

categories: frontEnd
title: Webpack
---

> commonJS 是 node.js,特就是服务器端广泛使用的模块化机制.
>
> 该规范的主要内容是,模块必须通过 module.exports 导出的变量或者是接口,通过 require()
>
> 来导入其他模块的输出到当前的模块作用域

根据这个规范，每个文件就是一个模块，有自己的作用域，文件中的变量、函数、类等都是对其他文件不可见的。

1.定义模块

在每个模块内部，module 变量代表当前模块。它的 exports 属性是对外的接口，将模块的接口暴露出去。其他文件加载该模块，实际上就是读取 module.exports 变量。

```javascript
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
123456;
```

2.加载模块

require 方法用于加载模块，后缀名默认为.js

```javascript
var app = require("./app.js");
1;
```

模块加载的顺序，按照其在代码中出现的顺序

根据参数的不同格式，require 命令去不同路径寻找模块文件。

- 如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。
- 如果参数字符串以“./”开头，则表示加载的是一个位于相对路径的模块文件
- 如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（node 核心模块，或者通过全局安装或局部安装在 node_modules 目录中的模块）
  入口文件
  一般都会有一个主文件（入口文件），在 index.html 中加载这个入口文件，然后在这个入口文件中加载其他文件。

可以通过在 package.json 中配置 main 字段来指定入口文件。

3.模块缓存

第一次加载某个模块时，Node 会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的 module.exports 属性。

加载机制
CommonJS 模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

## AMD

AMD(异步模块定义)是为浏览器环境设计的,因为 commonJS 模块系统是同步加载的,当前浏览器还没准备好同步加载的模块条件;

requirejs 即为 AMD 规范的模块化工具;

requireJS 的基本思想是通过 define 方法,将代码定义为模块,通过 require 方法,实现代码的模块加载

1.定义模块

define 方法用于定义模块，RequireJS 要求每个模块放在一个单独的文件里。

按照是否依赖其他模块，可以分成两种情况讨论。第一种情况是定义独立模块，即所定义的模块不依赖其他模块；第二种情况是定义非独立模块，即所定义的模块依赖于其他模块。

2.独立模块

```javascript
define(function(){
    ……
    return {
        //返回接口
    }
})
123456
```

define 定义的模块可以返回任何值，不限于对象。

3.非独立模块

````javascript
define(['module1','module2'],function(m1,m2){
    ……
    return {
        //返回接口
    }
})
​```javascript
要定义的模块依赖于module1和module2，那么第一个参数就是依赖的模块的数组。
第二个参数是一个函数，仅当依赖的模块都加载成功后才会被调用。此函数的参数m1，m2与前面数组中的依赖模块一一对应。

此模块必须返回一个对象，供其他模块调用。




````

4.加载模块

同样使用 require（）方法来加载模块，但由于是异步的，因此使用回调函数的形式。

```javascript
require(['foo','bar'],function(foo,bar){
    ……
})
123456789101112131415161718
```

上面方法表示加载 foo 和 bar 两个模块，当这两个模块都加载成功后，执行一个回调函数。该回调函数就用来完成具体的任务。

require 方法也可以用在 define 方法内部。

```javascript
define(function (require) {
  var otherModule = require("otherModule");
});
123;
```

require 方法允许添加第三个参数，即错误处理的回调函数。

```javascript
require(["backbone"], function (Backbone) {
  return Backbone.View.extend({
    /* ... */
  });
}, function (err) {
  // ...
});
123456789;
```

5.配置

require 方法本身也是一个对象，它带有一个 config 方法，用来配置 require.js 运行参数。

```javascript
require.config({
  paths: {
    jquery: "lib/jquery",
  },
});
12345;
```

paths：paths 参数指定各个模块的位置。这个位置可以是同一个服务器上的相对位置，也可以是外部网址。可以为每个模块定义多个位置，如果第一个位置加载失败，则加载第二个位置。上面就是指定了 jquery 的位置，那么就可以直接在文件中 require（[‘jquery’],function($){}）

shim：有些库不是 AMD 兼容的，这时就需要指定 shim 属性的值。shim 可以理解成“垫片”，用来帮助 require.js **加载非 AMD 规范的库**

```javascript
require.config({
  paths: {
    backbone: "vendor/backbone",
    underscore: "vendor/underscore",
  },
  shim: {
    backbone: {
      deps: ["underscore"],
      exports: "Backbone",
    },
    underscore: {
      exports: "_",
    },
  },
});
123456789101112131415;
```

6.使用

在主页面 index.html 中先通过 script 标签引入 require.min.js。
再通过 script 标签引入一个入口文件 main.js，此入口文件一般用于配置（require.config），以及引入其他模块。

CommonJS 与 AMD
CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
AMD 规范则是异步加载模块，允许指定回调函数，在回调函数中执行操作。
由于 Node.js 主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以 CommonJS 规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用 AMD 规范。

AMD 规范允许输出的模块兼容 CommonJS 规范，这时 define 方法需要写成下面这样：

```javascript
define(function(require,exports,module){
    var someModule = require("someModule");
    var anotherModule = require("anotherModule");
    ……
    exports.asplode = function(){

    }
})
12345678
```

## CMD

这是 cmd 的文件

## requirejs

> 这是 requirejs 的文件
