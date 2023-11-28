declare module 'string-sanitizers';

export declare const ignoreLeadingZeros: (input: string) => string;
export declare const ignoreSpaces: (input: string) => string;
export declare const ignoreNonNumericCharacters: (input: string) => string;
export declare const ignoreNonAlphaNumericCharacters: (input: string) => string;
export declare const ignoreAccentuatedCharacters: (input: string) => string;
export declare const ignoreStreetVariations: (input: string) => string;
export declare const sanitizePostalCode: (postalCode: string) => string;
export declare const sanitizeHouseNumber: (houseNumber: string) => string;
export declare const sanitizeStreetName: (streetName: string) => string;
