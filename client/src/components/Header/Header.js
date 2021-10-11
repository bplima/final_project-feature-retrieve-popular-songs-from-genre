import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div className="header">
          <div className="header__framework">
              <Link to="/" className="header__logo">Bopify</Link>
              <div className="header__user">
                  <div />
                  <span>paradoxpyt</span>
              </div>
          </div>
      </div>
    );
}
