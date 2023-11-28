import { SANITIZED_STREET_KEYWORD } from '../constants'
import {
  sanitizeHouseNumber,
  sanitizePostalCode,
  sanitizeStreetName,
} from '../sanitizers'

describe('Sanitizers', () => {
  describe('sanitizePostalCode', () => {
    it('Should return the correct postal code', () => {
      expect(sanitizePostalCode('DE-12345')).toEqual('12345')
      expect(sanitizePostalCode('12345')).toEqual('12345')
      expect(sanitizePostalCode('DE-12//345?')).toEqual('12345')
      expect(sanitizePostalCode('DE-12 345')).toEqual('12345')
      expect(sanitizePostalCode('012345')).toEqual('12345')
      expect(sanitizePostalCode('00012345')).toEqual('12345')
      expect(sanitizePostalCode('000- 1234>5??')).toEqual('12345')
    })
  })

  describe('sanitizeHouseNumber', () => {
    it('Should return the correct house number', () => {
      expect(sanitizeHouseNumber('DE-12')).toEqual('de12')
      expect(sanitizeHouseNumber('32')).toEqual('32')
      expect(sanitizeHouseNumber('A 34')).toEqual('a34')
      expect(sanitizeHouseNumber('A 3 4 5 - 6')).toEqual('a3456')
      expect(sanitizeHouseNumber('034')).toEqual('34')
      expect(sanitizeHouseNumber('0000034')).toEqual('34')
      expect(sanitizeHouseNumber('AAA034')).toEqual('aaa034')
      expect(sanitizeHouseNumber('00A034')).toEqual('a034')
      expect(sanitizeHouseNumber('??42-->C')).toEqual('42c')
      expect(sanitizeHouseNumber('4b')).toEqual('4b')
      expect(sanitizeHouseNumber('4 Bis')).toEqual('4bis')
    })
  })

  describe('sanitizeStreetName', () => {
    it('Should return the correct street name', () => {
      expect(sanitizeStreetName('Dolores Marques')).toEqual('doloresmarques')
      expect(sanitizeStreetName('Dolores Marques straße')).toEqual(
        `doloresmarques${SANITIZED_STREET_KEYWORD}`
      )
      expect(sanitizeStreetName('Dolores Marques str')).toEqual(
        `doloresmarques${SANITIZED_STREET_KEYWORD}`
      )
      expect(sanitizeStreetName('Dolores Marques street')).toEqual(
        `doloresmarques${SANITIZED_STREET_KEYWORD}`
      )
      expect(sanitizeStreetName('Dolores Marques strasse')).toEqual(
        `doloresmarques${SANITIZED_STREET_KEYWORD}`
      )
      expect(sanitizeStreetName('> Dolores Marques, straße!')).toEqual(
        `doloresmarques${SANITIZED_STREET_KEYWORD}`
      )
      expect(sanitizeStreetName('> DoLo//res Marq?UES, straße! 42')).toEqual(
        `doloresmarques${SANITIZED_STREET_KEYWORD}42`
      )
      expect(sanitizeStreetName('Dölôrès Màrqūęß')).toEqual(`doeloresmarquess`)
    })
  })
})
