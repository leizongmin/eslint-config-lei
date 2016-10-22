module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  plugins: [ 'eslint-plugin-promise' ],
  rules: {

    // ---------------------------- 强制的风格 -----------------------------------
    // 允许使用console
    'no-console': [ 'off' ],
    // array函数必须返回值
    'array-callback-return': 'error',
    // 变量只能在其作用域内使用
    'block-scoped-var': 'error',
    // 大括号规则：允许单行时省略大括号，但必须保持一致
    'curly': [ 'error', 'multi-line' ],
    // 点操作符和属性放在同一行
    'dot-location': [ 'error', 'property' ],
    // 禁用 caller 或 callee (no-caller)
    'no-caller': 'error',
    // 禁止使用看起来像除法的正则表达式
    'no-div-regex': 'error',
    // 禁止扩展原生对象
    'no-extend-native': 'error',
    // 禁止使用多行字符串
    'no-multi-str': 'error',
    // 禁止对原生对象赋值
    'no-native-reassign': 'error',
    // 禁用Function构造函数
    'no-new-func': 'error',
    // 禁止原始包装实例
    'no-new-wrappers': 'error',
    // 禁用八进制字面量
    'no-octal': 'error',
    // 禁止在字符串字面量中使用八进制转义序列
    'no-octal-escape': 'error',
    // 禁止重新声明变量
    'no-redeclare': 'error',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 不允许使用逗号操作符
    'no-sequences': 'error',
    // 限制可以被抛出的异常
    'no-throw-literal': 'error',
    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'error',
    // 禁止没有必要的字符拼接
    'no-useless-concat': 'error',
    // 禁用不必要的转义
    'no-useless-escape': 'error',
    // 禁止使用void操作符
    'no-void': 'error',
    // 禁用 with 语句
    'no-with': 'error',
    // parseInt 要求必须有基数
    'radix': 'error',
    // 需要把立即执行的函数包裹起来，比如 (function () { return { y: 1 };})();
    'wrap-iife': [ 'error', 'inside' ],
    // 条件等于比较时，禁止字面量在左边，比如 if ('hello' === a)
    'yoda': [ 'error', 'never', { 'exceptRange': true }],
    // 禁用标签语句
    'no-labels': 'error',
    // 禁用不必要的分号
    'no-extra-semi': 'error',
    // 禁止定义前使用变量
    'no-use-before-define': [ 'error', {
      'functions': false,
      'classes': false,
    }],
    // 禁止使用 var
    'no-var': 'error',
    // 验证构造函数中 super() 的调用
    'constructor-super': 'error',
    // 不允许修改类声明的变量
    'no-class-assign': 'error',
    // 不允许改变用 const 声明的变量
    'no-const-assign': 'error',
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 在构造函数中禁止在调用super()之前使用this或super
    'no-this-before-super': 'error',
    // 禁用 new Symbol()
    'no-new-symbol': 'error',
    // 要求调用无参构造函数时带括号
    'new-parens': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 禁止使用 Object 构造函数
    'no-new-object': 'error',
    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': [ 'warn', { 'allowForLoopAfterthoughts': true }],
    // 要求在变量声明周围换行
    'one-var-declaration-per-line': [ 'error', 'initializations' ],
    // 禁止使用 Unicode 字节顺序标记 (BOM)
    'unicode-bom': 'error',
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // 要求使用 === 和 !==
    'eqeqeq': [ 'error', 'allow-null' ],
    // 禁止在 else 前有 return
    'no-else-return': 'error',

    // ------------------------ Node.js 强制的风格 -------------------------------
    // 强制回调错误处理（当第一个参数以 err 开头时）
    'handle-callback-err': [ 'error', '^err.*$' ],
    // 禁用混合的 Requires
    'no-mixed-requires': 'error',
    // 不允许 new require
    'no-new-require': 'error',
    // 当使用 _dirname 和 _filename 时不允许字符串拼接，必须用 path.resolve(__dirname, xx)
    'no-path-concat': 'error',
    // 禁用未声明的变量
    'no-undef': 'error',

    // ---------------------------- 建议的风格 -----------------------------------
    // 缩进必须为2个空格
    'indent': [ 'warn', 2 ],
    // 换行符使用\n
    'linebreak-style': [ 'warn', 'unix' ],
    // 字符串只能使用单引号或者反引号
    'quotes': [ 'warn', 'single', { 'allowTemplateLiterals': true }],
    // 末尾需要分号
    'semi': [ 'warn', 'always' ],
    // 强制圆括号内有空格
    'space-in-parens': [ 'warn', 'never' ],
    // 强制对象的花括号中有空格
    'object-curly-spacing': [ 'warn', 'always', {
      'objectsInObjects': false,
      'arraysInObjects': false,
    }],
    // 强制在方括号内使用空格
    'array-bracket-spacing': [ 'warn', 'always', {
      'objectsInArrays': false,
      'arraysInArrays': false,
    }],
    // 要求或禁止在注释前有空白
    'spaced-comment': [ 'warn', 'always', { 'exceptions': [ '-', '+', '=' ]}],
    // 禁用警告注释
    'no-warning-comments': [ 'warn', {
      'terms': [ 'todo', 'fixme', 'fix' ],
      'location': 'anywhere',
    }],
    // 要求函数圆括号之前有一个空格，比如 function () {} 或 function aaa() {}
    'space-before-function-paren': [ 'warn', {
      'anonymous': 'always',
      'named': 'never',
    }],
    // 要求文件末尾保留一行空行
    'eol-last': 'warn',
    // 禁用行尾空格
    'no-trailing-spaces': [ 'warn', { 'skipBlankLines': true }],
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': 'warn',
    // 强制模板字符串中空格的使用
    'template-curly-spacing': [ 'warn', 'always' ],
    // 要求使用拖尾逗号
    'comma-dangle': [ 'warn', 'always-multiline' ],
    // 强制在单行代码块中使用空格
    'block-spacing': 'warn',
    // 大括号风格
    'brace-style': [ 'warn', '1tbs', { 'allowSingleLine': true }],
    // 强制在逗号周围使用空格
    'comma-spacing': [ 'warn', { 'before': false, 'after': true }],
    // 强制使用一致的逗号风格
    'comma-style': [ 'warn', 'last' ],
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [ 'warn', {
      'beforeColon': false,
      'afterColon': true,
    }],
    // 禁止使用内联注释
    'no-inline-comments': 'warn',
    // 不允许多个空行
    'no-multiple-empty-lines': [ 'warn', {
      'max': 2,
      'maxEOF': 1,
      'maxBOF': 1,
    }],
    // 强制文件的最大行数
    'max-lines': [ 'warn', {
      'max': 1000,
      'skipComments': true,
      'skipBlankLines': true,
    }],
    // 强制函数内最大语句数量
    'max-statements': [ 'warn', 200 ],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': [ 'warn', { 'max': 5 }],
    // 限制最大参数个数
    'max-params': [ 'warn', 10 ],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': [ 'warn', 10 ],
    // 要求中缀操作符周围有空格
    'space-infix-ops': [ 'warn', { 'int32Hint': false }],
    // 禁止 function 标识符和应用程序之间有空格
    'no-spaced-func': 'warn',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止对函数参数再赋值及修改其属性
    'no-param-reassign': 'warn',
    // 要求构造函数首字母大写
    'new-cap': 'warn',
    // 允许_开头的未使用参数
    'no-unused-vars': [ 'warn', { 'argsIgnorePattern': '^_' }],
    // 建议使用 const
    'prefer-const': 'warn',
    // 禁用函数内没有yield的 generator 函数
    'require-yield': 'warn',
    // 建议 generator 函数中 * 号周围有空格，比如 function* generator() {}
    'generator-star-spacing': [ 'warn', { 'before': false, 'after': true }],
    // 建议在 yield* 表达式中 * 周围使用空格，比如 yield* other();
    'yield-star-spacing': [ 'warn', { 'before': false, 'after': true }],
    // 建议对象字面量简写语法
    'object-shorthand': 'warn',
    // 建议可以表达为更简单结构的条件表达式
    'no-unneeded-ternary': 'warn',

    // ------------------------ Pomise 强制的风格 --------------------------------
    // 调用 Pomise 函数时，必须有 .catch(callback) 或者用 return 返回当前 Promise 对象
    'promise/catch-or-return': 'error',
    // new Promise() 时，函数的参数名只能为标准的 resolve, reject
    'promise/param-names': 'error',

  },
};
