import React from "react";

/**
 * El layout de React de la página web
 *
 * @return Los hijos de los props de la página web renderizada
 */
export default function Layout(props: any) {
  return (
    <div>
      {props.children}
    </div>
  );
}