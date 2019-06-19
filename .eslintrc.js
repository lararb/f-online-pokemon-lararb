module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2],
        "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "semi": [2, "always"],
        "eqeqeq": 2,
        "strict": [2, "global"],

        "no-console": 1,
        "array-callback-return": 1,
        "block-scoped-var": 1,
        "consistent-return": 1,
        "curly": [1, "multi-line", "consistent"],
        "no-empty-function": 1,
        "no-useless-return": 1,
        "vars-on-top": 1,
        "no-use-before-define": [1, "nofunc"],
        "global-require": 1,
        "camelcase": 1,
        "new-cap": 1,
        "no-lonely-if": 1,
        "no-multiple-empty-lines": [1, { "max": 3 }],
        "no-trailing-spaces": 1,

        "no-restricted-properties": [1, {
          "property": "lenght",
          "message": "Use length instead of lenght (notice the position of the h)"
    }
};