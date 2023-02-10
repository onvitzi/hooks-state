# useMemo 
### "Returns a memoized value."

Is a React Hook that lets you cache the result of a calculation between re-renders.

The function passed to useMemo runs during rendering.

UseMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
### Usage
* Skipping expensive recalculations
* Skipping re-rendering of components
* Memoizing a dependency of another Hook
* Memoizing a function