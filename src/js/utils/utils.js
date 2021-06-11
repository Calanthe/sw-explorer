export function removeWhiteSpaces(string) {
    return string.replace(/\s/g, '').replace('/','-');
};

export function getWindowHost() {
    return window.location.protocol + "//" + window.location.host;
};

export function showUnits(value, unit) {
    return (value !== 'n/a' && value !== 'unknown') ? unit : '';
};