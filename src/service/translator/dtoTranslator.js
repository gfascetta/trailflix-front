export const userResponseDTO = (user) => {
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        birthDate: user.birthDate,
        lastUpdate: user.lastUpdate,
    }
}