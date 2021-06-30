export function removeWhiteSpaces(string: string) {
    return string.replace(/\s/g, '').replace('/','-');
};

export function getWindowDomain() {
    return window.location.protocol + "//" + window.location.host + window.location.pathname;
};

export function showUnits(value: string, unit: string) {
    return (value !== 'n/a' && value !== 'unknown') ? unit : '';
};