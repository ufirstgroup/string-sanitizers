/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// eslint-disable-next-line fp/no-mutation
module.exports = {
    modulePaths: ['<rootDir>'],
    preset: 'ts-jest',
    testPathIgnorePatterns: ['node_modules/'],
}
