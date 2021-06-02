export function removeWhiteSpaces(string) {
    return string.replace(/\s/g, '');
};

export function getWindowHost() {
    return window.location.protocol + "//" + window.location.host;
};