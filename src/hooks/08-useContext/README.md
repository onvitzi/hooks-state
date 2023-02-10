# useContext 
Is a React Hook that lets you read and subscribe to context from your component.

### Usage
* Passing data deeply into the tree
* Updating data passed via context
* Specifying a fallback default value
* Overriding context for a part of the tree
* Optimizing re-renders when passing objects and functions


Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest ***<MyContext.Provider>*** above the calling component in the tree.

When the nearest ***<MyContext.Provider>*** above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

### Pitfall
useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().