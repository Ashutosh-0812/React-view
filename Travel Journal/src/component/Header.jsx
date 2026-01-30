import globe from "../assets/globe.png"

export default function Header() {
  return (
    <header className="header">
      <img src={globe} alt="globe" />
      <h1>Travel Journal</h1>
    </header>
  )
}
