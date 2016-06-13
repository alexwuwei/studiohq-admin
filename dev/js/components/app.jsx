var locations = [{
id: 1,
name: "Seattle, 4th & Pike",
address: "1234 Pike St",
address2: "Suite 1337",
contactEmail: "",
replyEmail: "",
city: "Seattle",
state: "WA",
zip: "98101",
phone: "206-212-4434"
}, {
id: 2,
name: "Seattle, 5th & Pine",
address: "2345 Pine St",
address2: "Suite 3200",
contactEmail: "info@studiohq.com",
replyEmail: "",
city: "Seattle",
state: "WA",
zip: "98101",
phone: "206-774-5967"
}];

var Main = React.createClass({
//   getInitialState: () => {
//     return {
//       locations: [{
//   name: "Seattle, 4th & Pike",
//   address: "1234 Pike St",
//   address2: "Suite 1337",
//   contactEmail: "",
//   replyEmail: "",
//   city: "Seattle",
//   state: "WA",
//   zip: "98101",
//   phone: "206-212-4434"
// }, {
//   name: "Seattle, 5th & Pine",
//   address: "2345 Pine St",
//   address2: "Suite 3200",
//   contactEmail: "info@studiohq.com",
//   replyEmail: "",
//   city: "Seattle",
//   state: "WA",
//   zip: "98101",
//   phone: "206-774-5967"
// }]
//     }
//   },
render: () => {
  return (
  <section className="outer">
      <section className="left-container">
        <h2>Studio<span>HQ</span></h2>
      <Nav />
      </section>
      <section className="right-container">
        <header className="results-header">
        <h4>Happy Dance & Music</h4>
          <Dropdown />
        </header>
        <Results />
      </section>



  </section>
  );
}
});

var Nav = React.createClass({
render: () => {
  return (
    <ul className="primary-nav">
    <li>Dashboard</li>
    <li>Classes</li>
    <li>Students</li>
    <li>Payments</li>
    <li>Staff</li>
    <li>Settings</li>
    <li>Log Out</li>
  </ul>);
}
});

var Dropdown = React.createClass({
render: () => {
  return (
    <div>Seattle, 4th & Pike</div>
  );
}
});

var Results = React.createClass({
render: () => {
  return (
    <section className="results-container">
    <h2>Studio Settings</h2>
    <Secondarynav />
    <Locations />
    </section>
  );
}
});

var Secondarynav = React.createClass({
render: () => {
return (
<ul className="second-nav-list">
    <li><a href="#">Company</a></li>
    <li><a href="#">Locations</a></li>
    <li><a href="#">Class Types</a></li>
    <li><a href="#">Managers</a></li>
    <li><a href="#">Billing Info</a></li>
    <li><a href="#">Merchant Account</a></li>
  </ul>
);
}
});

var FormRender = React.createClass({
  render: () => {
    return (
      <section className="form">
        <h1>hello</h1>
      </section>
    )
  }
})

var Locations = React.createClass({
  getInitialState: () => {
    return {showForm: false}
  },
  clickHandler: () => {
    // this.setState({showForm: true});
    this.state.showForm ?
    this.setState({showForm: false}) :
    this.setState({showForm: true});
  },
render: () => {
return (
  <section className="locations-container">
{locations.map((location, i) => {
      var formState = false;
      var handleClick = () => {
        this.formState ?
        this.formState = false :
        this.formState = true;
      }
      return <div key={location.id} onClick={this.clickHandler} className="location-instance">{location.name}</div>
      { this.state.showForm ? <FormRender /> : null }

      // return ( <section>
      //   <div key={location.id} onClick={handleClick()}>{location.name}</div>
      // { this.formState ? <div>hello</div> : null }
      // </section>);

    })}
  <a className="location-instance" href="#">Create New Location</a>
   <div className="buttons-container">
     <button id="button cancel-button">Cancel</button>
     <button id="button save-button">Save</button>
    </div>
  </section>
);
},
  showForm: () => {
  console.log("hello");
}
});

ReactDOM.render(<Main />, document.getElementById('container'));
