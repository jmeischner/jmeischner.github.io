const small = "576px"
const medium = "768px"
const large = "992px"

const theme = {
  fontFamily: "'Zilla Slab', serif",
  color: {
    primary: "#343838",
    secondary: "#FF9900",
  },
  breakpoint: {
    small: small,
    medium: medium,
    large: large,
  },
  media: {
    small: `max-width: ${small}`,
    medium: `max-width: ${medium}`,
    large: `max-width: ${large}`,
  },
}

export default theme
