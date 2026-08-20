

export const getAge = (birthdate: string) => {
    if(!birthdate) return new Error(`La fecha de nacimiento es requerida`);

    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
