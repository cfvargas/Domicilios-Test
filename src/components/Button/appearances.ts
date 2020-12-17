import colors from '../../config/colors'

export type appearance = {
  text: string
  background: string
}

type appearancesType = {
  primary: appearance
  secondary: appearance
}

const appearances: appearancesType = {
  primary: {
    text: colors.white,
    background: colors.green,
  },
  secondary: {
    text: colors.green,
    background: colors.white,
  },
}

export default appearances
