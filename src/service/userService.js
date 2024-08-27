export const login = ({username, password}) => {
    return usersMock[username];
}

const usersMock = {
    "pepe" : {
        firstName: "Pepe",
        lastname: "Perez",
        username: "pepito",
        birthDate: 1993-11-30,
        registerDate: 2024-8-26,
        lastUpdate: Date.now()
    }
}