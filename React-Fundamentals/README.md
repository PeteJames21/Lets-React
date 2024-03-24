# The Fundamentals of Working with React

This folder contains tutorials on how to test React on a browser without using a backend
server. The HTML files will work by simply opening them in a browser without having to
serve them over a local server. The code is compiled within the browser by the included
Babel scripts. Note, however, that this is not standard practice. Production code usually
does the compilation on the server side.

## Including React and supporting tools

### Including React scripts from unpkg

React can be included in the project by adding the following scripts to the `<head>` tag
of your html files

```
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- `react` is the core React library.
- `react-dom` provides DOM-specific methods that enable you to use React with the DOM.

### Including Babel from unpkg

Babel is included as a transpiler to transform JSX and other modern JS features into
compatible JS code.

To add Babel to your project, copy and paste the following script in the `<head>` of
your index.html file:

`<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`

For Babel to know which scripts to transform, give the target scripts the attribute
`type="text/jsx"` e.g:

```
<script type="text/jsx">
  const domNode = document.getElementById('app');
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

### Adding the React Developer Tools for debugging on a browser

visit: https://react.dev/learn/react-developer-tools

## Practice code

### 0-vanilla-js.html

Demonstrates how to append a node to an existing DOM element using vanilla JS.

### 0-with-react.html

Demonstrates how to append a node to an existing DOM element using React.

### 1-creating-components.html

Demonstates how to create React components.

In React, a component is simply a JS function that returns some JSX code. The function
names must be capitalized to distinguish them from plain HTML and JS.

### 2-using-props.html

Demonstrates how to pass properties (aka 'props') to react components. This includes using
object destructuring or consuming the entire props object.
