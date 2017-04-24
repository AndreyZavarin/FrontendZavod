module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": "airbnb",
  "rules": {
    "indent": [ 2 ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "radix": ["error", "as-needed"],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/no-unused-prop-types": "warn",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    "max-len": [
      0,
      120
    ],
    "quote-props": "warn",
    "arrow-body-style": "0",
    "arrow-parens": "0",
    "eol-last": "0",
    "sort-imports": "0",
    "jsx-a11y/anchor-has-content": "0",
    "jsx-a11y/img-has-alt": "0",
    "jsx-a11y/label-has-for": "1",
    "jsx-a11y/no-static-element-interactions": "0",
    "import/prefer-default-export": "0",
    "object-curly-spacing": "0",
    "operator-assignment": "0",
    "no-plusplus": "0",
    "no-param-reassign": "1",
    "no-case-declarations": "0",
    "no-underscore-dangle": "0",
    "no-use-before-define": "0",
    "global-require": "0",
    "react/forbid-prop-types": "0",
    "react/jsx-closing-bracket-location": "0",
    "react/jsx-space-before-closing": "0",
    "react/no-unescaped-entities": "0",
    "react/prefer-stateless-function": "1",
    "quotes": "0"
  }
}