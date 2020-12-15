import { createContext } from 'react';

var d = new Date();
// console.log('auth-context.js ' + d.getSeconds() + " " + d.getMilliseconds());

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});
