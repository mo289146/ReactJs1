var React = require('react');
var GmailMessages = require('./GmailMessages');
//var GrandChildComponent1 = require('./GrandChildComponents1');
 //var arr=[];
var count=0;
var retrievedMailArr=[];
var pushedArr=[];
var GmailList = React.createClass({

  getInitialState: function(){
    return {data:[]};
  },
  componentDidMount:function()
  {
    var listid=[];
    var msglist=[];

    listid=this.props.id2;

      console.log('listId  length----->'+listid.length);
    for(var i=0;i<listid.length;i++)
  {
    count =count+1;

      var accessToken1 = localStorage.getItem('gToken');

      $.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/me/messages/'+listid[i]+'?fields=payload%2Fheaders&key={AIzaSyCHUBMVPTzgByzKsrAKYO3Rt6YPt9BjOJI}',
       dataType: 'json',
       async :false,
       type: 'GET',
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken1);
       },
       success: function(data)
       {


         var dataArr = Object.keys(data).map(function(k) { return data[k] });
             var mailDataArr=dataArr[0].headers;
             var fromArray = mailDataArr.filter(function(item) { return item.name === 'From';});
             var subjectArray = mailDataArr.filter(function(item) { return item.name === 'Subject';});
             var dateArray = mailDataArr.filter(function(item) { return item.name === 'Date';});
             var aggregatedArray=fromArray.concat(subjectArray).concat(dateArray);
             //retrievedMailArr.push(aggregatedArray);
             pushedArr.push(aggregatedArray);
             this.setState({data:pushedArr});
             console.log('this state called-->'+this.state.data);

       }.bind(this),
       error: function(xhr, status, err) {
         console.log("error");
         console.error(err.toString());
       }.bind(this)
    });

 }

  },
render: function(){
  var arr=[];
  var froms='';
   var to='';
   var dateg='';

var aggregatedArray1=this.state.data;

console.log('State data2--->'+this.state.data);

   aggregatedArray1.forEach(function(email) {
     console.log('email--->'+JSON.stringify(email));
       froms=email[0].value;
       to=email[1].value;
       dateg= email[2].value;

       arr.push(<GmailMessages froms={froms} to={to} dateg={dateg}/>);
   });
  return(<div className="container-fluid">
  <div className="col-md-12">
  <table className="table table-inbox table-hover">
                   <tbody>
                   {arr}
                   </tbody>
                   </table>
                   </div>
                   </div>
                 )
                 }
                 });
module.exports = GmailList;
