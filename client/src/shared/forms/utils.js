export const VALUE = "value";
export const ERROR = "error";

const isBool = (value) => {
    return typeof value === "boolean";
}

export const isObject = (value) => {
    return typeof value === "object" && value !== null;
}

export const getPropValues = (stateSchema, prop) => {
    return Object.keys(stateSchema).reduce((field, key) => {
        field[key] = isBool(prop) ? prop : stateSchema[key][prop];
        return field;
    }, {});
}
