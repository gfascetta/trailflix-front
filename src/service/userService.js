import { console_log_debug } from "../utils/logging";

export const login = ({username, password}) => {
    console_log_debug('user y pass logeados: ', username, password);
    const user = usersMock[username];
    if (user == null) {
        throw new Error('user not exist');
    }
    //TODO: add dto translator
    return user;
}

const usersMock = {
    "pepe" : {
        firstName: "Pepe",
        lastName: "Perez",
        username: "pepito",
        birthDate: new Date(1993, 10, 30).toLocaleDateString(),
        registerDate: new Date(2024, 7, 26).toLocaleString(),
        lastUpdate: new Date().toLocaleString(),
    }
}