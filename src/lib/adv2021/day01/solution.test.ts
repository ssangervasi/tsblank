import { readInput, readInputLines, splitLines } from '../utils'
import { solvePartOne, solvePartTwo, parseInput, DAY } from './solution'

const EXAMPLE_STR = `
199
200
208
210
200
207
240
269
260
263
`
const EXAMPLE_INPUT = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
const EXAMPLE_ANSWER_ONE = 7
const EXAMPLE_ANSWER_TWO = 5

describe(DAY, () => {
	it('parses the input', () => {
		expect(parseInput(splitLines(EXAMPLE_STR))).toEqual(EXAMPLE_INPUT)
	})

	describe('Part 1', () => {
		it('solves the example', () => {
			expect(solvePartOne(EXAMPLE_INPUT)).toEqual(EXAMPLE_ANSWER_ONE)
		})

		it('solves the problem', () => {
			const input = readInputLines(__dirname)
			const parsed = parseInput(input)
			console.log(
				`Parsed ${typeof parsed} from input of length ${input.length}`,
			)
			const result = solvePartOne(parsed)
			console.log(`Result Part One: ${result}`)
		})
	})

	describe('Part 2', () => {
		it('solves the example', () => {
			expect(solvePartTwo(EXAMPLE_INPUT)).toEqual(EXAMPLE_ANSWER_TWO)
		})

		it('solves the problem', () => {
			const input = readInputLines(__dirname)
			const parsed = parseInput(input)
			console.log(
				`Parsed ${typeof parsed} from input of length ${input.length}`,
			)
			const result = solvePartTwo(parsed)
			console.log(`Result Part Two: ${result}`)
		})
	})
})
