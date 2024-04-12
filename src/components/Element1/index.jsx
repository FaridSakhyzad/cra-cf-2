import './style.scss';
import logo from '../../logo.svg';

export default function Element1 () {
  return (
    <>
      <h1>ELEMENT 1</h1>
      <div className="element1-para1"></div>
      <div className="element1-para2">
        <img src={logo} alt="" className="element1-logo" />
      </div>
    </>
  )
}