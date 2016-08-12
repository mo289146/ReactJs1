var React = require('react');
//var GrandChildComponent = require('./GrandChildComponents');
//var LeftChildComponent = require('./leftchild');
//var RightChildComponent = require('./rightchild');
var ChildComponent = React.createClass({
render: function(){
  return(
    <div className="container-fluid">
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><img id="brand-image" height="30" width="70" alt="Brand" src="images/gmail.jpg" /></a>
        </div>

        
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group" id="search">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
          <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li>
                                <a href="#"><span className="glyphicon glyphicon-wrench" id="setting"></span> Settings</a>
                            </li>

                            <li>
                                <a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
                            </li>

                            <li>
                                <a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
                            </li>

                            <li className="divider"></li>

                            <li>
                                <a href="#"><span className="glyphicon glyphicon-off"></span> Sign out</a>
                            </li>
              </ul>

            </li>
          </ul>
        </div>

    </nav>
        </div>

);
}
});
module.exports = ChildComponent;
