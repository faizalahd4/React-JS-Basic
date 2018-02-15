import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  
    render() {
        var details = {
            menu: [{name: "All Post", link: "/post"}, {name: "Play Audio", link: "/audio"}]
        };
        return(
            <div className="main-section">
              <div className="menu-container">
                <ul className="menu">
                    {details.menu.map((obj, index) => <li key={index}><Link to={obj.link} activeClassName={"active"}>{obj.name}</Link></li>)}
                </ul>
              </div>
              <div className="body-section">
                {this.props.children}
              </div>
            </div>
        );
    }
}

export default Header;