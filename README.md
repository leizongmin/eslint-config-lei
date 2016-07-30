# eslint-config 配置

## 安装

```bash
$ npm install eslint-config-lei
```

## 使用方法

在项目根目录下新建文件`.eslintrc.js`：

一般使用：

```javascript
module.exports = {
  "extends": "lei",
};
```

包含 ES7 语法时：

```javascript
module.exports = {
  "parser": "babel-eslint",
  "extends": "lei",
};
```

在基于`mocha`框架的单元测试中使用，在`test`目录下新建文件`.eslintrc.js`：

```javascript
module.exports = {
  "extends": "lei/mocha",
};
```


## License

```
The MIT License (MIT)

Copyright (c) 2016 Zongmin Lei <leizongmin@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
