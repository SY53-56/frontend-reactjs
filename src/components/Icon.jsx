 export default function Icon({ onClick, to, size=18, Icon }) {
  const iconElement = <Icon size={size} style={{ cursor: 'pointer' }} />

  return to
    ? <Link to={to}>{iconElement}</Link>
    : <span onClick={onClick}>{iconElement}</span>
}
