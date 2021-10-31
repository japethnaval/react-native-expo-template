module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": "airbnb-typescript-prettier",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "jest": true,
  },
  "rules": {
   // This is covered by TS interfaces instead
   'react/jsx-props-no-spreading': ['off'],
    "react/prop-types": 'off',
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-named-as-default": ["off"],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    "no-restricted-imports": ["error", {
      "paths": [{
        "name": "@material-ui/core",
        "message": "Please use specific imports instead. Example: '@material-ui/core/Button'."
      }, {
        "name": "lodash",
        "message": "Please use specific imports like 'lodash/get' instead."
      }]
    }],
  },
  "ignorePatterns": ['**/*.d.ts', '**/*.config.js', '**/*.js'],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
