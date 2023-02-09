import { forwardRef } from 'react';

export const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

// Uso
// *Exponer un nodo DOM al componente padre
// *Pasar una ref a través de múltiples componentes
// *Exposición de un manejador imperativo en lugar de un nodo DOM
// Solución de problemas
// *Mi componente está envuelto en forwardRef, pero la ref a él es siempre null.

// En el ejemplo anterior, React pasa un ref dado a un elemento <FancyButton ref={ref}> 
// como un segundo argumento a la función de renderizado dentro de la llamada React.forwardRef. 
// Esta función de renderizado pasa el ref al elemento <button ref={ref}>.

// Como resultado, después que React adjunte el ref, ref.current apuntará directamente a la instancia del elemento DOM <button>.