var React = require('react');
var GmailList = require('./GmailList');
var GmailId = React.createClass({
  getInitialState:function()
  {
    return {ids:[]};
  },
componentWillMount:function()
{
  console.log("abb");
  //console.log(this.props.messageData);
  var row=[];
    console.log(this.props.messageData.messages.length);
  for(var i=0;i<this.props.messageData.messages.length;i++)
  {

    console.log(this.props.messageData.messages[0].id);

    var id1=this.props.messageData.messages[i].id;
    console.log(id1);
    row.push(id1);
    this.setState({ids:row})
}
},
render:function()
{
  return(<div className="col-md-10"> <GmailList id2={this.state.ids}/></div>)
}
});

module.exports = GmailId;
