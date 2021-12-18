# React Shopping Cart

## This Project Makes Use of:
- ```react-router-dom``` from [React Router Dom] (https://reactrouter.com/)
- [Create React App](https://github.com/facebook/create-react-app)


### An assignment from [The Odin Project](https://www.theodinproject.com/) to learn and practice:
- React Router DOM:
    - ```BrowserRouter```
    - ```Route```
    - ```Routes```

### Things I learned:
- Handling API calls in Functional Components with the ```componentDidMount```  equivalent ```useEffect( () => {... DoSomething} ,{})```
- The importance of preforming API calls **only once** and then setting the component state with the returned value
- The ***intricacies*** of updating Objects inside of Arrays with the ```useState( (prevState) => ...prevState)```  syntax


### Functionality:
- Fetch the Manifest with an initial API call
- Then based of the metadata fetch the image data which is returned in the form of 'Collection+JSON'
- Prices are also generated at random once in the component lifecycle, then used throughout the users' session, never changing.
- App features 4 Routes: 
  1. Home: ```"/"``` 
  2. Welcome: ```"/welcome"``` (This is just user-syntactic sugar which seems friendlier than ```"/"``` )
  3. Shop: ```"/shop"```
  4. Cart: ```"/shop/cart"```

#### Technologies Used:
- HTML5, CSS3
- React.js
- react-router-dom
- CSS Modules
- Webpack
