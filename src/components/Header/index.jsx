import { Link } from "react-router-dom";

export default function Header () {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/profile">Profile</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/about">About</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/faq">F.A.Q.</Link>
      <hr />
    </header>
  )
}