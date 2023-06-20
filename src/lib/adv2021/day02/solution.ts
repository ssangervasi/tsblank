export const DAY = '02'

export type Vector = {
	readonly x: number
	readonly y: number
}

export const V_ZERO: Vector = {
	x: 0,
	y: 0,
}

export const vScale = (v: Vector, s: number): Vector => ({
	x: v.x * s,
	y: v.y * s,
})
export const vAdd = (v0: Vector, v1: Vector): Vector => ({
	x: v0.x + v1.x,
	y: v0.y + v1.y,
})
export const vSum = (vs: Vector[]): Vector =>
	vs.reduce((sum, next) => vAdd(sum, next), V_ZERO)

const COMMAND_KEYS = ['forward', 'down', 'up'] as const
type CommandKey = (typeof COMMAND_KEYS)[number]

const UNIT_VECTORS: Record<CommandKey, Vector> = {
	forward: {
		x: 1,
		y: 0,
	},
	down: {
		x: 0,
		y: 1,
	},
	up: {
		x: 0,
		y: -1,
	},
}

export type InputType = Vector[]

export const parseInput = (input: string[]): InputType => {
	const parsed: Vector[] = []

	for (const line of input) {
		const stripped = line.trim()
		if (stripped.length === 0) {
			continue
		}

		const parts = stripped.split(' ')
		if (parts.length < 2) {
			continue
		}

		const dirStr = parts[0]
		const numStr = parts[1]

		const dir = COMMAND_KEYS.includes(dirStr as CommandKey)
			? (dirStr as CommandKey)
			: undefined

		if (dir === undefined) {
			continue
		}

		const num = Number.parseInt(numStr, 10)
		if (Number.isNaN(num)) {
			continue
		}

		const unitV = UNIT_VECTORS[dir]
		const v = vScale(unitV, num)

		parsed.push(v)
	}

	return parsed
}

export const solvePartOne = (input: InputType): number => {
	const endPos = vSum(input)
	return endPos.x * endPos.y
}

export const solvePartTwo = (input: InputType): number => {
	return 0
}
