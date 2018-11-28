module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
  	"vue/html-end-tags": 'error',
	  "vue/require-prop-types": 'error',
	  "vue/no-multi-spaces": 'error',
	  "vue/no-v-html": 'error',
	  "vue/this-in-template": ['error', 'never'],
	  "vue/prop-name-casing": ['error', 'PascalCase'],
	  "vue/html-self-closing": ['error', {
  		html: {void: 'never', normal: 'always', component: 'always'},
		  svg: 'always',
		  math: 'always'
	  }],
	  "vue/html-indent": ['error', 'tab', {
  		"attribute": 1,
		  "closeBracket": 0,
		  "alignAttributesVertically": true,
		  "ignores": []
	  }],
	  "vue/attribute-hyphenation": ['error', 'always', {ignores: ['custom-prop']}],
	  "vue/mustache-interpolation-spacing": ['error', 'always'],
	  "eqeqeq": ['error', 'always'],
	  "arrow-spacing": 'error',
	  "no-var": 'error',
	  "prefer-const": 'error',
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	  "quotes": [1, "single"],
	  // "semi": [0, "never"],
	  // "indent": [2, 4]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};


