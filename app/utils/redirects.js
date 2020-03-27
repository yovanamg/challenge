/*
* Funcion de ayuda para crear funciones de redirect en rutas.
*
 */

function redirectFromLogin() {
  return (nextState, replace) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      switch (user.rol) {
        case 'admin':
          replace('/home');
          break;
        default:
          replace('/');
          break;
      }
    }
  };
}


export default function getRedirects(store) {
  return {
    redirectFromLogin: redirectFromLogin(store),
  };
}
