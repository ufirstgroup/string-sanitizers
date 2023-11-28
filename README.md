# string-sanitizers
Functions to sanitize strings and addresses

## How to use
Add this library as a dependencies in your project:
```
yarn add -D string-sanitizers@https://github.com/ufirstgroup/string-sanitizers.git
```

This will add a new line in your package.json file:
```
"string-sanitizers": "https://github.com/ufirstgroup/string-sanitizers.git",
```

## What functions are available:

### String functions:
- ignoreLeadingZeros
- ignoreSpaces
- ignoreNonNumericCharacters
- ignoreNonAlphaNumericCharacters
- ignoreAccentuatedCharacters

### Address functions:
- ignoreStreetVariations
- sanitizePostalCode
- sanitizeHouseNumber
- sanitizeStreetName

