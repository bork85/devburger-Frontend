import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(() => {
        const userInfoLocalStorage = localStorage.getItem('devburger:UserData');
        return userInfoLocalStorage ? JSON.parse(userInfoLocalStorage) : {};
    });

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem('devburger:UserData', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:UserData');
    };

    // Este useEffect agora é apenas para sincronizar o estado com o localStorage,
    // garantindo que ele seja atualizado corretamente quando a página for recarregada ou em produção.
    useEffect(() => {
        if (Object.keys(userInfo).length > 0) {
            localStorage.setItem('devburger:UserData', JSON.stringify(userInfo));
        }
    }, [userInfo]);

    return (
        <UserContext.Provider value={{userInfo, putUserData, logout}}>{children}</UserContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error('useUser must be a valid context!')
    }
    return context;
}