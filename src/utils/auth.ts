import { Session } from '../types/session';

export const getUserSessions = (): Session[] => {
  const sessions = localStorage.getItem('userSessions');
  return sessions ? JSON.parse(sessions) : [];
};

export const saveSession = (session: Session) => {
  const sessions = getUserSessions();
  sessions.push(session);
  localStorage.setItem('userSessions', JSON.stringify(sessions));
};

export const updateSession = (sessionId: string, updates: Partial<Session>) => {
  const sessions = getUserSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index] = { ...sessions[index], ...updates };
    localStorage.setItem('userSessions', JSON.stringify(sessions));
  }
};
