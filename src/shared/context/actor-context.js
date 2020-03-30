import { createContext } from 'react';

export const ActorContext = createContext({
  isLoggedIn: false,
  actorId: null,
  login: () => {},
  logout: () => {}
});