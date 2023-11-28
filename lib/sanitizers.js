"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeStreetName = exports.sanitizeHouseNumber = exports.sanitizePostalCode = exports.ignoreStreetVariations = exports.ignoreAccentuatedCharacters = exports.ignoreNonAlphaNumericCharacters = exports.ignoreNonNumericCharacters = exports.ignoreSpaces = exports.ignoreLeadingZeros = void 0;
var constants_1 = require("./constants");
var ignoreLeadingZeros = function (input) { return input.replace(/^0+/, ''); };
exports.ignoreLeadingZeros = ignoreLeadingZeros;
var ignoreSpaces = function (input) { return input.replace(/\s/g, ''); };
exports.ignoreSpaces = ignoreSpaces;
var ignoreNonNumericCharacters = function (input) {
    return input.replace(/\D/g, '');
};
exports.ignoreNonNumericCharacters = ignoreNonNumericCharacters;
var ignoreNonAlphaNumericCharacters = function (input) {
    return input.replace(/[^a-z0-9]/g, '');
};
exports.ignoreNonAlphaNumericCharacters = ignoreNonAlphaNumericCharacters;
var ignoreAccentuatedCharacters = function (input) {
    return input.replace(/[^\w\s]/g, function (match) { return constants_1.ACCENTUATED_CHARACTERS_MAPPING.get(match) || match; });
};
exports.ignoreAccentuatedCharacters = ignoreAccentuatedCharacters;
var ignoreStreetVariations = function (input) {
    return input.replace(new RegExp(constants_1.INVALID_STREET_KEYWORDS.join('|'), 'gi'), constants_1.SANITIZED_STREET_KEYWORD);
};
exports.ignoreStreetVariations = ignoreStreetVariations;
var sanitizePostalCode = function (postalCode) {
    var postalCodeWithoutSpaces = (0, exports.ignoreSpaces)(postalCode);
    var postalCodeWithOnlyNumbers = (0, exports.ignoreNonNumericCharacters)(postalCodeWithoutSpaces);
    return (0, exports.ignoreLeadingZeros)(postalCodeWithOnlyNumbers);
};
exports.sanitizePostalCode = sanitizePostalCode;
var sanitizeHouseNumber = function (houseNumber) {
    var lowerCaseHouseNumber = houseNumber.toLocaleLowerCase();
    var houseNumberWithoutSpaces = (0, exports.ignoreSpaces)(lowerCaseHouseNumber);
    var houseNumberWithoutNonAlphaNumericCharacters = (0, exports.ignoreNonAlphaNumericCharacters)(houseNumberWithoutSpaces);
    return (0, exports.ignoreLeadingZeros)(houseNumberWithoutNonAlphaNumericCharacters);
};
exports.sanitizeHouseNumber = sanitizeHouseNumber;
var sanitizeStreetName = function (streetName) {
    var lowerCaseStreetName = streetName.toLocaleLowerCase();
    var streetNameWithoutStreetVariation = (0, exports.ignoreStreetVariations)(lowerCaseStreetName);
    var streetNameWithoutSpaces = (0, exports.ignoreSpaces)(streetNameWithoutStreetVariation);
    var streetNameWithoutAccentuatedCharacters = (0, exports.ignoreAccentuatedCharacters)(streetNameWithoutSpaces);
    return (0, exports.ignoreNonAlphaNumericCharacters)(streetNameWithoutAccentuatedCharacters);
};
exports.sanitizeStreetName = sanitizeStreetName;
