var React = require('react');
var GmailMessages = React.createClass({

  render: function(){
    //console.log("476566");
    //console.log(arr);
    return(
      <div className="container-fluid">
      <table className="table table-inbox table-hover" >
                       <tbody>
                       <tr>
                       <td className="view-message">{this.props.froms}</td>
                        <td className="view-message">{this.props.to}</td>
                         <td className="view-message  text-right">{this.props.dateg}</td>
                         </tr>
                         </tbody>
                         </table>
                         </div>
                   );
                   }

                   });
                   module.exports = GmailMessages;
