import { console_log_debug } from "../utils/logging";
import { userResponseDTO } from "./translator/dtoTranslator";

export const login = ({username, password}) => {
    console_log_debug('user y pass logeados: ', username, password);
    const user = usersMock[username];
    if (user == null) {
        throw new Error('user not exist');
    } else {
        if(password != user.password){
            throw new Error('invalid credentials');
        }
    }
    return userResponseDTO(user);
}

const usersMock = {
    "pepe" : {
        firstName: "Pepe",
        lastName: "Perez",
        username: "pepito",
        password: "1234",
        birthDate: new Date(1993, 10, 30).toLocaleDateString(),
        registerDate: new Date(2024, 7, 26).toLocaleString(),
        lastUpdate: new Date().toLocaleString(),
    },
    "gabi" : {
        firstName: "Gabriela",
        lastName: "Fascettta",
        username: "gabiF",
        password: "1234",
        birthDate: new Date(1993, 10, 30).toLocaleDateString(),
        registerDate: new Date(2024, 7, 26).toLocaleString(),
        lastUpdate: new Date().toLocaleString(),
    }
}