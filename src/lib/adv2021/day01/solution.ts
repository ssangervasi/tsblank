export const DAY = '01'

export const parseInput = (input: string[]): number[] => {
	const parsed = []
	for (const line of input) {
		const stripped = line.trim()
		if (stripped.length === 0) {
			continue
		}

		const num = Number.parseInt(stripped, 10)
		if (Number.isNaN(num)) {
			continue
		}

		parsed.push(num)
	}

	return parsed
}

export const solvePartOne = (input: number[]): number => {
	let increases = 0
	let previous: undefined | number

	for (const depth of input) {
		if (previous === undefined) {
			previous = depth
		}

		if (previous < depth) {
			increases += 1
		}

		previous = depth
	}

	return increases
}

export const solvePartTwo = (input: number[]): number => {
	let targetWindowSize = 3

	const windowAverages = []

	for (let rightEdge = 0; rightEdge < input.length; rightEdge += 1) {
		const leftEdge = Math.max(rightEdge - targetWindowSize + 1, 0)
		const actualWindowSize = rightEdge - leftEdge + 1

		if (actualWindowSize != targetWindowSize) {
			continue
		}

		let windowSum = 0
		for (let entryIndex = leftEdge; entryIndex <= rightEdge; entryIndex += 1) {
			windowSum += input[entryIndex]
		}

		const windowAverage = windowSum / actualWindowSize
		windowAverages.push(windowAverage)
	}

	return solvePartOne(windowAverages)
}
