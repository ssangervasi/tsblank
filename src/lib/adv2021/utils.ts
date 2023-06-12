import * as fs from 'fs'
import * as path from 'path'

export const readInput = (dirname: string): string =>
	fs.readFileSync(path.join(dirname, 'input.txt')).toString()

export const readInputLines = (dirname: string): string[] =>
	splitLines(readInput(dirname))

export const splitLines = (str: string) => str.split(/\n/)
