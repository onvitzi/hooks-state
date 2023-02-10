# useCallback 
### "Returns a memoized callback."

Is a React Hook that lets you cache a function definition between re-renders.
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
``` 

### Usage
* Skipping re-rendering of components
* Updating state from a memoized callback
* Preventing an Effect from firing too often
* Optimizing a custom Hook