import { createContext, useState} from "react";
import PropTypes from "prop-types";
//import useLocalStorage from '../hooks/useLocalStorage   ';

// const localStorageKey = '__trailflix_user__';

// export const getUser = () => JSON.parse(window.localStorage.getItem(localStorageKey));

export const UserContext = createContext();
export const userInfoContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({username:'', password:''});
    const [userInfo, setUserInfo] = useState(null);

    //const [user, setUser] = useLocalStorage(localStorageKey, null);

    const handleUser = (usuarioIgresado) => {
        setUser({username: usuarioIgresado.username, password:usuarioIgresado.password});
    };
    
    const handleUserInfo = (userFromDb) => {
        setUserInfo(userFromDb);
    }

    // const login = (userData) => {
    //     userClient.login(userData).then(handleUserResponse);
    // }

    // const register = (userData) => {
    //     userClient.register(userData).then(handleUserResponse);
    // }

    // const logout = () => {
    //     setUser(null);
    //     return Promise.resolve();
    //   };

    return (
        <UserContext.Provider value={{user, handleUser}}>
            <userInfoContext.Provider value={{userInfo, handleUserInfo}}>
                {children}
            </userInfoContext.Provider>
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.any
  }



