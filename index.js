module.exports = {
  'env': {
    'node': true,
    'es6': true,
  },
  'extends': [ 'eslint:recommended' ],
  'parserOptions': {
    'sourceType': 'module',
  },
  'rules': {
    // 缩进必须为2个空格
    'indent': [ 'error', 2 ],
    // 换行符使用\n
    'linebreak-style': [ 'error', 'unix' ],
    // 字符串只能使用单引号或者反引号
    'quotes': [ 'error', 'single', { 'allowTemplateLiterals': true }],
    // 末尾需要分号
    'semi': [ 'error', 'always' ],
    // 允许使用console
    'no-console': [ 'off' ],
    // 允许_开头的未使用参数
    'no-unused-vars': [ 'error', { 'argsIgnorePattern': '^_' }],
    // array函数必须返回值
    'array-callback-return': 'error',
    // 变量只能在其作用于内使用
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
    // 禁止使用多个空格
    'no-multi-spaces': 'error',
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
    // 禁止对函数参数再赋值及修改其属性
    'no-param-reassign': [ 'error', { 'props': true }],
    // 禁止重新声明变量
    'no-redeclare': 'error',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'warn',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 不允许使用逗号操作符
    'no-sequences': 'warn',
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
    // 禁用警告注释
    'no-warning-comments': [ 'warn', { 'terms': [ 'todo', 'fixme', 'fix' ], 'location': 'anywhere' }],
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
    // 不允许使用undefined变量
    'no-undefined': 'error',
    // 禁止定义前使用变量
    'no-use-before-define': [ 'error', { 'functions': false, 'classes': false }],
    // 禁止使用 var
    'no-var': 'error',
    // 强制回调错误处理（当第一个参数以 err 开头时）
    'handle-callback-err': [ 'error', '^err.*$' ],
    // 禁用混合的 Requires
    'no-mixed-requires': 'error',
    // 不允许 new require
    'no-new-require': 'error',
    // 当使用 _dirname 和 _filename 时不允许字符串拼接，必须用 path.resolve(__dirname, xx)
    'no-path-concat': 'error',
    // 验证构造函数中 super() 的调用
    'constructor-super': 'error',
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': 'error',
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
    // 要求对象字面量简写语法
    'object-shorthand': 'error',
    // 建议使用 const
    'prefer-const': 'error',
    // 禁用函数内没有yield的 generator 函数
    'require-yield': 'error',
    // 强制模板字符串中空格的使用
    'template-curly-spacing': [ 'warn', 'always' ],
    // 强制 generator 函数中 * 号周围有空格，比如 function* generator() {}
    'generator-star-spacing': [ 'error', { 'before': false, 'after': true }],
    // 强制在 yield* 表达式中 * 周围使用空格，比如 yield* other();
    'yield-star-spacing': [ 'error', { 'before': false, 'after': true }],
    // 要求使用拖尾逗号
    'comma-dangle': [ 'error', 'always-multiline' ],
    // 强制在单行代码块中使用空格
    'block-spacing': 'error',
    // 大括号风格
    'brace-style': 'error',
    // 强制在逗号周围使用空格
    'comma-spacing': [ 'error', { 'before': false, 'after': true }],
    // 强制使用一致的逗号风格
    'comma-style': [ 'error', 'last' ],
    // 要求文件末尾保留一行空行
    'eol-last': 'warn',
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [ 'error', {
      'beforeColon': false,
      'afterColon': true,
    }],
    // 要求构造函数首字母大写
    'new-cap': 'warn',
    // 要求调用无参构造函数时带括号
    'new-parens': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止使用内联注释
    'no-inline-comments': 'warn',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 不允许多个空行
    'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxEOF': 1, 'maxBOF': 1 }],
    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 禁止使用 Object 构造函数
    'no-new-object': 'error',
    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': [ 'warn', { 'allowForLoopAfterthoughts': true }],
    // 禁止 function 标识符和应用程序之间有空格
    'no-spaced-func': 'error',
    // 禁用行尾空格
    'no-trailing-spaces': [ 'warn', { 'skipBlankLines': true }],
    // 禁止可以表达为更简单结构的条件表达式
    'no-unneeded-ternary': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 要求在变量声明周围换行
    'one-var-declaration-per-line': [ 'error', 'always' ],
    // 要求函数圆括号之前有一个空格，比如 function () {} 或 function aaa() {}
    'space-before-function-paren': [ 'error', { 'anonymous': 'always', 'named': 'never' }],
    // 要求或禁止在注释前有空白
    'spaced-comment': [ 'error', 'always', { 'exceptions': [ '-', '+', '=' ]}],
    // 禁止使用 Unicode 字节顺序标记 (BOM)
    'unicode-bom': 'error',

    // 强制圆括号内有空格
    'space-in-parens': [ 'error', 'never' ],
    // 强制对象的花括号中有空格
    'object-curly-spacing': [ 'error', 'always', {
      'objectsInObjects': false,
      'arraysInObjects': false,
    }],
    // 强制在方括号内使用空格
    'array-bracket-spacing': [ 'error', 'always', {
      'objectsInArrays': false,
      'arraysInArrays': false,
    }],

  },
};
