const { join } = require(`path`);

const srcDir = join(__dirname, `src`);

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    browser: true,
    jest: true,
    node: true,
    "jest/globals": true
  },
  globals: {
    cy: true
  },
  plugins: [
    "@typescript-eslint", // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    `import`, // https://github.com/benmosher/eslint-plugin-import
    `promise`, // https://github.com/xjamundx/eslint-plugin-promise
    "jsx-a11y", // https://github.com/evcohen/eslint-plugin-jsx-a11y
    "react", // https://github.com/yannickcr/eslint-plugin-react
    "react-hooks", // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    "jest", // https://github.com/jest-community/eslint-plugin-jest
    "graphql"
  ],
  settings: {
    polyfills: [`fetch`, `Promise`]
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Possible Errors
    "for-direction": 2,
    "no-await-in-loop": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": [2, `always`],
    "no-console": 2,
    "no-constant-condition": 1,
    "no-control-regex": 2,
    "no-debugger": 1,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, `functions`],
    "no-extra-semi": 0,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 0,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,

    // Best Practices
    "accessor-pairs": 2,
    "array-callback-return": 1,
    "block-scoped-var": 2,
    "class-methods-use-this": 0,
    complexity: [0, { max: 20 }],
    "consistent-return": 0,
    curly: [2, `multi-line`],
    "default-case": 2,
    "dot-location": [2, `property`],
    "dot-notation": [2, { allowKeywords: true }],
    eqeqeq: [2, `smart`],
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": [2, { allow: [`arrowFunctions`, `constructors`] }],
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 0,
    "no-implicit-globals": 0,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": [
      2,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-restricted-properties": 0,
    "no-return-assign": [2, `always`],
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": [2, { props: true }],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 0,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-useless-return": 2,
    "no-void": 2,
    "no-warning-comments": 0,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    radix: 2,
    "require-await": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, `any`],
    yoda: 2,

    // Strict Mode
    strict: [2, `never`],

    // Variables
    "init-declarations": 0,
    "no-catch-shadow": 0,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-restricted-globals": 0,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-use-before-define": [2, { functions: true, classes: true }],

    // Node.js and CommonJS
    "callback-return": 0,
    "global-require": 0,
    "handle-callback-err": 2,
    "no-buffer-constructor": 2,
    "no-mixed-requires": 0,
    "no-new-require": 2,
    "no-path-concat": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-restricted-modules": 0,
    "no-sync": 0,

    // Stylistic Issues
    "array-bracket-newline": [2, { multiline: true }],
    "array-bracket-spacing": 2,
    "array-element-newline": 0,
    "block-spacing": [2, `always`],
    "brace-style": [2, `1tbs`, { allowSingleLine: true }],
    camelcase: [2, { properties: `never` }],
    "capitalized-comments": 0,
    "comma-dangle": [2, `never`],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, `last`],
    "computed-property-spacing": 2,
    "consistent-this": 0,
    "eol-last": 2,
    "func-call-spacing": 2,
    "func-name-matching": 0,
    "func-names": 0,
    "func-style": [2, `declaration`, { allowArrowFunctions: true }],
    "function-paren-newline": [2, `consistent`],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    indent: 0, // Incompatible with Prettier
    "jsx-quotes": [2, `prefer-double`],
    "key-spacing": 0,
    "keyword-spacing": [2, { before: true, after: true }],
    "line-comment-position": 0,
    "linebreak-style": 0,
    "lines-around-comment": 0,
    "lines-between-class-members": [2, `always`, { exceptAfterSingleLine: true }],
    "max-depth": 0,
    "max-len": 0,
    "max-lines": 0,
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "max-statements-per-line": 0,
    "multiline-comment-style": 0,
    "multiline-ternary": [2, `always-multiline`],
    "new-cap": [2, { newIsCap: true }],
    "new-parens": 2,
    "newline-per-chained-call": 0,
    "no-array-constructor": 0,
    "no-bitwise": [2, { allow: [`~`] }],
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-operators": 0,
    "no-mixed-spaces-and-tabs": [2, `smart-tabs`],
    "no-multi-assign": 2,
    "no-multiple-empty-lines": [2, { max: 2 }],
    "no-negated-condition": 2,
    "no-nested-ternary": 0,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-restricted-syntax": 0,
    "no-tabs": 0,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": 0,
    "object-curly-newline": [
      2,
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { consistent: true }
      }
    ],
    "object-curly-spacing": [2, `always`],
    "object-property-newline": [2, { allowMultiplePropertiesPerLine: true }],
    "one-var": [2, `never`],
    "one-var-declaration-per-line": [2, `always`],
    "operator-assignment": [2, `always`],
    "operator-linebreak": [2, `before`, { overrides: { "&&": `ignore`, "=": `ignore` } }],
    "padded-blocks": [2, `never`],
    "padding-line-between-statements": 0,
    "quote-props": [2, "as-needed"],
    quotes: 0, // Conflicts with TypeScript, use TypeScript Plugin Rule Instead
    "require-jsdoc": 0,
    semi: [0, `never`],
    "semi-spacing": [2, { before: false, after: true }],
    "semi-style": [2, `last`],
    "sprt-keys": 0,
    "sort-vars": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, { anonymous: `never`, named: `never`, asyncArrow: `always` }],
    "space-in-parens": [2, `never`],
    "space-infix-ops": 2,
    "space-unary-ops": [2, { words: true, nonwords: false }],
    "spaced-comment": [0, `always`, { plugins: [`react`], exceptions: [`*`], markers: [`*`] }],
    "switch-colon-spacing": [2, { before: false, after: true }],
    "template-tag-spacing": [2, `never`],
    "unicode-bom": 0,
    "wrap-regex": 2,

    // ECMAScript 6
    "arrow-body-style": [2, `as-needed`],
    "arrow-parens": [2, `as-needed`],
    "arrow-spacing": [2, { before: true, after: true }],
    "constructor-super": 0,
    "generator-star-spacing": [2, { before: true, after: false }],
    "no-class-assign": 2,
    "no-confusing-arrow": 0,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-new-symbol": 2,
    "no-restricted-imports": 0,
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "no-var": 2,
    "object-shorthand": [2, `properties`],
    "prefer-arrow-callback": 2,
    "prefer-const": 0,
    "prefer-destructuring": 0,
    "prefer-numeric-literals": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "rest-spread-spacing": [2, `never`],
    "sort-imports": 0,
    "symbol-description": 2,
    "template-curly-spacing": [2, `never`],
    "yield-star-spacing": [2, { before: false, after: true }],

    /*--- Plugin Specific Rules ---*/

    // jest
    "jest/consistent-test-it": 2,
    "jest/lowercase-name": 0,
    "jest/no-disabled-tests": 1,
    "jest/no-focused-tests": 2,
    "jest/no-hooks": 0,
    "jest/no-identical-title": 2,
    "jest/no-jest-import": 2,
    "jest/no-large-snapshots": [1, { maxSize: 12 }],
    "jest/no-test-prefixes": 2,
    "jest/prefer-to-have-length": 1,
    "jest/prefer-to-be-null": 1,
    "jest/prefer-to-be-undefined": 1,
    "jest/prefer-expect-assertions": 0,
    "jest/valid-describe": 2,
    "jest/valid-expect": 2,
    "jest/valid-expect-in-promise": 2,

    // react
    "react/jsx-one-expression-per-line": 0,
    "react/no-danger": 0,
    "react/display-name": 1,
    "react/react-in-jsx-scope": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"]
      }
    ],

    // react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // jsx-ally
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"]
      }
    ],

    // import
    "import/no-extraneous-dependencies": 0,
    "import/no-cycle": "warn",
    "import/prefer-default-export": 0,
    "import/no-named-default": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/named": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-deprecated": 2,
    "import/no-mutable-exports": 2,
    "import/no-duplicates": 2,
    "import/no-namespace": 0,
    "import/newline-after-import": 2,
    "import/order": [
      2,
      {
        "newlines-between": `never`,
        groups: [`builtin`, [`internal`, `external`], [`parent`, `sibling`], `index`]
      }
    ],

    // typescript
    "@typescript-eslint/prefer-interface": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": ["error", { vars: "local", args: "none", ignoreRestSiblings: true }],
    "@typescript-eslint/quotes": ["error", "backtick", { avoidEscape: true }],

    // promise
    "promise/catch-or-return": [2, { terminationMethod: [`catch`, `finally`] }],
    "promise/always-return": 2,
    "promise/no-return-wrap": 2,
    "promise/param-names": 2,
    "promise/prefer-await-to-then": 2,
    "promise/prefer-await-to-callbacks": 2,

    // graphql

    'graphql/template-strings': ['error', {
      env: 'apollo',
      schemaJsonFilepath: `./schema.json`,
      tagName: 'graphql',
    }]
  }
};
