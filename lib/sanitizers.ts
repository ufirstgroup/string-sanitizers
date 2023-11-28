import {
  ACCENTUATED_CHARACTERS_MAPPING,
  INVALID_STREET_KEYWORDS,
  SANITIZED_STREET_KEYWORD,
} from './constants'

export const ignoreLeadingZeros = (input: string) => input.replace(/^0+/, '')

export const ignoreSpaces = (input: string) => input.replace(/\s/g, '')

export const ignoreNonNumericCharacters = (input: string) =>
  input.replace(/\D/g, '')

export const ignoreNonAlphaNumericCharacters = (input: string) =>
  input.replace(/[^a-z0-9]/g, '')

export const ignoreAccentuatedCharacters = (input: string) =>
  input.replace(
    /[^\w\s]/g,
    (match) => ACCENTUATED_CHARACTERS_MAPPING.get(match) || match
  )

export const ignoreStreetVariations = (input: string) =>
  input.replace(
    new RegExp(INVALID_STREET_KEYWORDS.join('|'), 'gi'),
    SANITIZED_STREET_KEYWORD
  )

export const sanitizePostalCode = (postalCode: string) => {
  const postalCodeWithoutSpaces = ignoreSpaces(postalCode)
  const postalCodeWithOnlyNumbers = ignoreNonNumericCharacters(
    postalCodeWithoutSpaces
  )

  return ignoreLeadingZeros(postalCodeWithOnlyNumbers)
}

export const sanitizeHouseNumber = (houseNumber: string) => {
  const lowerCaseHouseNumber = houseNumber.toLocaleLowerCase()
  const houseNumberWithoutSpaces = ignoreSpaces(lowerCaseHouseNumber)
  const houseNumberWithoutNonAlphaNumericCharacters =
    ignoreNonAlphaNumericCharacters(houseNumberWithoutSpaces)

  return ignoreLeadingZeros(houseNumberWithoutNonAlphaNumericCharacters)
}

export const sanitizeStreetName = (streetName: string) => {
  const lowerCaseStreetName = streetName.toLocaleLowerCase()
  const streetNameWithoutStreetVariation =
    ignoreStreetVariations(lowerCaseStreetName)
  const streetNameWithoutSpaces = ignoreSpaces(streetNameWithoutStreetVariation)
  const streetNameWithoutAccentuatedCharacters = ignoreAccentuatedCharacters(
    streetNameWithoutSpaces
  )

  return ignoreNonAlphaNumericCharacters(streetNameWithoutAccentuatedCharacters)
}
