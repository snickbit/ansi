# @snickbit/ansi

## Table of contents

### Variables

- [ansiStyles](README.md#ansistyles)

### Functions

- [ansiRegex](README.md#ansiregex)
- [stripAnsi](README.md#stripansi)

## Variables

### ansiStyles

• `Const` **ansiStyles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bgColor` | { `bgBlack`: `number`[] ; `bgBlackBright`: `number`[] ; `bgBlue`: `number`[] ; `bgBlueBright`: `number`[] ; `bgCyan`: `number`[] ; `bgCyanBright`: `number`[] ; `bgGreen`: `number`[] ; `bgGreenBright`: `number`[] ; `bgMagenta`: `number`[] ; `bgMagentaBright`: `number`[] ; `bgRed`: `number`[] ; `bgRedBright`: `number`[] ; `bgWhite`: `number`[] ; `bgWhiteBright`: `number`[] ; `bgYellow`: `number`[] ; `bgYellowBright`: `number`[]  } |
| `bgColor.bgBlack` | `number`[] |
| `bgColor.bgBlackBright` | `number`[] |
| `bgColor.bgBlue` | `number`[] |
| `bgColor.bgBlueBright` | `number`[] |
| `bgColor.bgCyan` | `number`[] |
| `bgColor.bgCyanBright` | `number`[] |
| `bgColor.bgGreen` | `number`[] |
| `bgColor.bgGreenBright` | `number`[] |
| `bgColor.bgMagenta` | `number`[] |
| `bgColor.bgMagentaBright` | `number`[] |
| `bgColor.bgRed` | `number`[] |
| `bgColor.bgRedBright` | `number`[] |
| `bgColor.bgWhite` | `number`[] |
| `bgColor.bgWhiteBright` | `number`[] |
| `bgColor.bgYellow` | `number`[] |
| `bgColor.bgYellowBright` | `number`[] |
| `color` | { `black`: `number`[] ; `blackBright`: `number`[] ; `blue`: `number`[] ; `blueBright`: `number`[] ; `cyan`: `number`[] ; `cyanBright`: `number`[] ; `green`: `number`[] ; `greenBright`: `number`[] ; `magenta`: `number`[] ; `magentaBright`: `number`[] ; `red`: `number`[] ; `redBright`: `number`[] ; `white`: `number`[] ; `whiteBright`: `number`[] ; `yellow`: `number`[] ; `yellowBright`: `number`[]  } |
| `color.black` | `number`[] |
| `color.blackBright` | `number`[] |
| `color.blue` | `number`[] |
| `color.blueBright` | `number`[] |
| `color.cyan` | `number`[] |
| `color.cyanBright` | `number`[] |
| `color.green` | `number`[] |
| `color.greenBright` | `number`[] |
| `color.magenta` | `number`[] |
| `color.magentaBright` | `number`[] |
| `color.red` | `number`[] |
| `color.redBright` | `number`[] |
| `color.white` | `number`[] |
| `color.whiteBright` | `number`[] |
| `color.yellow` | `number`[] |
| `color.yellowBright` | `number`[] |
| `modifier` | { `bold`: `number`[] ; `dim`: `number`[] ; `hidden`: `number`[] ; `inverse`: `number`[] ; `italic`: `number`[] ; `overline`: `number`[] ; `reset`: `number`[] ; `strikethrough`: `number`[] ; `underline`: `number`[]  } |
| `modifier.bold` | `number`[] |
| `modifier.dim` | `number`[] |
| `modifier.hidden` | `number`[] |
| `modifier.inverse` | `number`[] |
| `modifier.italic` | `number`[] |
| `modifier.overline` | `number`[] |
| `modifier.reset` | `number`[] |
| `modifier.strikethrough` | `number`[] |
| `modifier.underline` | `number`[] |

## Functions

### ansiRegex

▸ **ansiRegex**(`__namedParameters?`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.onlyFirst` | `boolean` |

#### Returns

`RegExp`

___

### stripAnsi

▸ **stripAnsi**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `any` |

#### Returns

`string`
