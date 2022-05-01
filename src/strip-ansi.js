import {ansiRegex} from './ansi-regex'

export function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``)
	}

	return string.replace(ansiRegex(), '')
}
