import React, { createContext, useContext, useState, ReactNode } from 'react';


interface AuthContextType {
  user: any; 
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem('user') || 'null'));

  const login = (email: string, password: string): boolean => {

    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: any) => user.email === email && user.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser)); 
      return true;
    }
    
    return false; 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/'; 
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook 
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
