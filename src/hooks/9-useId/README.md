# useId 
Is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.

```javascript
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
}
// You can then pass the generated ID to different attributes:
  <>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
  ```

### Usage
* Generating unique IDs for accessibility attributes
* Generating IDs for several related elements
* Specifying a shared prefix for all generated IDs

### Parámetros 
* useId no toma ningún parámetro.

### Retorna 
* useId devuelve una cadena de ID única asociada con esta llamada useId llamado en un componente particular.