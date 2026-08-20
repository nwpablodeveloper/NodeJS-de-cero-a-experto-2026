"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    if (!birthdate)
        return new Error(`La fecha de nacimiento es requerida`);
    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
//# sourceMappingURL=get-age.plugin.js.map