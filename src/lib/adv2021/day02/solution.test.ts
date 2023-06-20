import exp from 'constants'
import { readInput, readInputLines, splitLines } from '../utils'
import {
	solvePartOne,
	solvePartTwo,
	parseInput,
	InputType,
	DAY,
	vSum,
	vAdd,
} from './solution'

const EXAMPLE_STR = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`
const EXAMPLE_INPUT: InputType = [
	{
		x: 5,
		y: 0,
	},
	{
		x: 0,
		y: 5,
	},
	{
		x: 8,
		y: 0,
	},
	{
		x: 0,
		y: -3,
	},
	{
		x: 0,
		y: 8,
	},
	{
		x: 2,
		y: 0,
	},
]
const EXAMPLE_ANSWER_ONE = 150
const EXAMPLE_ANSWER_TWO = 0

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

	describe.skip('Part 2', () => {
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
