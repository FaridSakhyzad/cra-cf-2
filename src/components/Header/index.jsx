import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiToggle } from 'store/ui';

export default function Header () {
  const { text: headerText, show } = useSelector(({ ui }) => ui);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(uiToggle());
  };

  return (
    <header>
      <h1>Header</h1>
      <p>{headerText}</p>
      <button onClick={handleButtonClick}>Click The Button!</button>
      <hr />
      {show && (<div>DIV TO SHOW</div>)}
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