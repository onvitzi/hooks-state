# useLayoutEffect 
Is a version of useEffect that fires before the browser repaints the screen.

### Usage
Measuring layout before the browser repaints the screen.

### Parameters 
* setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. 

* optional dependencies: The list of all reactive values referenced inside of the setup code.

### Returns 
useLayoutEffect returns undefined.

### Caveats 
* So you can only call it at the top level of your component or your own Hooks.

* When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup.

* If some of your dependencies are objects or functions defined inside the component, there is a risk that they will cause the Effect to re-run more often than needed.

* Effects only run on the client. They don’t run during server rendering.

* When possible, prefer useEffect.