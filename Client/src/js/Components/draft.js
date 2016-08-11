var React = require('react');
var MailComponent = require('./Mails');
//var GrandChildComponent1 = require('./GrandChildComponents1');
 //var arr=[];
var count=0;
var retrievedMailArr=[];
var pushedArr=[];
var DraftChildComponent = React.createClass({

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
       url: 'https://www.googleapis.com/gmail/v1/users/abbasaslam.abbas%40gmail.com/messages'+listid[i]+'?fields=payload%2Fheaders&key={AIzaSyCHUBMVPTzgByzKsrAKYO3Rt6YPt9BjOJI}',
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
      //  console.log("aggregatedArray123---->"+JSON.stringify(aggregatedArray));
         //var tempProps=this.props.emails;

         /*for(var i=0;i<data.payload.headers.length;i++)
         {

        if(data.payload.headers[i].name=="From")
        {
          froms=data.payload.headers[i].value;

        }
        if(data.payload.headers[i].name=="Subject")
        {
          to=data.payload.headers[i].value;
        }
        if(data.payload.headers[i].name=="Date")
        {
          dateg=data.payload.headers[i].value;
        }

        console.log("From"+froms+"Subject"+to+"Date"+dateg);
      //  arr.push(<tr><td>{froms}</td>
        //<td>{to}</td>
        //<td>{dateg}</td></tr>);
      //  console.log(froms + " "+to + " "+ dateg);
    }*/

      //arr.push(<MailComponent froms={froms} to={to} dateg={dateg}/>);
    //  console.log('arr22----------->'+JSON.stringify(arr));
//arr.push(<tr><td>{froms}</td><td>{to}</td><td>{dateg}</td></tr>);
       }.bind(this),
       error: function(xhr, status, err) {
         console.log("error");
         console.error(err.toString());
       }.bind(this)
    });

 }
// console.log("angellllllll77777999997777777777");
 //console.log(arr);
//console.log(count);
  },
render: function(){
  var arr=[];
  var froms='';
   var to='';
   var dateg='';

var aggregatedArray1=this.state.data;
//console.log('State data--->'+JSON.stringify(aggregatedArray1));
console.log('State data2--->'+this.state.data);


//var tempProps=this.props.aggregatedArray1;
   aggregatedArray1.forEach(function(email) {
     console.log('email--->'+JSON.stringify(email));
       froms=email[0].value;
       to=email[1].value;
       dateg= email[2].value;
      // mailId = email[3];
       arr.push(<MailComponent froms={froms} to={to} dateg={dateg}/>);
   });

/*  for(var j=0;j<aggregatedArray1.length;j++) {
    //console.log("data---->"+JSON.stringify(data));


       //console.log('Values---->'+aggregatedArray1[j].value);
      if(aggregatedArray1[0].name=='From'){
        froms=aggregatedArray1[0].value;
      }

      if(aggregatedArray1[0].name=='Subject'){
        to=aggregatedArray1[0].value;
      }
      if(aggregatedArray1[0].name=='Date'){
        dateg=aggregatedArray1[0].value;
      }
      //mailId = email[3];
     arr.push(<MailComponent froms={froms} to={to} dateg={dateg} />);
     console.log("final"+arr);
  }*/
  //console.log("476566");
  //console.log(arr);
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
module.exports = DraftChildComponent;
