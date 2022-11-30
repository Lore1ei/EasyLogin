import React, {useEffect, useState} from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvide = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLogin = localStorage.getItem('isLoggedIn');

        if(storedUserLogin === '1'){
            setIsLoggedIn(true)
        }
    }, [])

    const logoutHandler = () =>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loggedInHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loggedInHandler}}
    >{props.children}</AuthContext.Provider>
};

export default AuthContext;
