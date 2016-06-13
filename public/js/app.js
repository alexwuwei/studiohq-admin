var locations = [{
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

var Main = React.createClass({displayName: "Main",
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
  React.createElement("section", {className: "outer"}, 
      React.createElement("section", {className: "left-container"}, 
        React.createElement("h2", null, "Studio", React.createElement("span", null, "HQ")), 
      React.createElement(Nav, null)
      ), 
      React.createElement("section", {className: "right-container"}, 
        React.createElement("header", {className: "results-header"}, 
        React.createElement("h6", null, "Happy Dance & Music"), 
          React.createElement(Dropdown, null)
        ), 
        React.createElement(Results, null)
      )



  )
  );
}
});

var Nav = React.createClass({displayName: "Nav",
render: () => {
  return (
    React.createElement("ul", {className: "primary-nav"}, 
    React.createElement("li", null, "Dashboard"), 
    React.createElement("li", null, "Classes"), 
    React.createElement("li", null, "Students"), 
    React.createElement("li", null, "Payments"), 
    React.createElement("li", null, "Staff"), 
    React.createElement("li", null, "Settings"), 
    React.createElement("li", null, "Log Out")
  ));
}
});

var Dropdown = React.createClass({displayName: "Dropdown",
render: () => {
  return (
    React.createElement("div", null, "Seattle, 4th & Pike")
  );
}
});

var Results = React.createClass({displayName: "Results",
render: () => {
  return (
    React.createElement("section", {className: "results-container"}, 
    React.createElement("h2", null, "Studio Settings"), 
    React.createElement(Secondarynav, null), 
    React.createElement(Locations, null)
    )
  );
}
});

var Secondarynav = React.createClass({displayName: "Secondarynav",
render: () => {
return (
React.createElement("ul", {className: "second-nav-list"}, 
    React.createElement("li", null, React.createElement("a", {href: "#"}, "Company")), 
    React.createElement("li", null, React.createElement("a", {href: "#"}, "Locations")), 
    React.createElement("li", null, React.createElement("a", {href: "#"}, "Class Types")), 
    React.createElement("li", null, React.createElement("a", {href: "#"}, "Managers")), 
    React.createElement("li", null, React.createElement("a", {href: "#"}, "Billing Info")), 
    React.createElement("li", null, React.createElement("a", {href: "#"}, "Merchant Account"))
  )
);
}
});

var Locations = React.createClass({displayName: "Locations",
render: () => {
//     var locationsArray = this.props.locations.map((location) => {

//     });
return (
  React.createElement("section", {className: "locations-container"}, 
React.createElement("div", null, "Locations placeholder"), 
  React.createElement("a", {href: "#"}, "Create New Location"), 
   React.createElement("div", {className: "buttons-container"}, 
     React.createElement("button", {id: "button cancel-button"}, "Cancel"), 
     React.createElement("button", {id: "button save-button"}, "Save")
    )
  )
);
}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('container'));





//
// var locations = [{
// name: "Seattle, 4th & Pike",
// address: "1234 Pike St",
// address2: "Suite 1337",
// contactEmail: "",
// replyEmail: "",
// city: "Seattle",
// state: "WA",
// zip: "98101",
// phone: "206-212-4434"
// }, {
// name: "Seattle, 5th & Pine",
// address: "2345 Pine St",
// address2: "Suite 3200",
// contactEmail: "info@studiohq.com",
// replyEmail: "",
// city: "Seattle",
// state: "WA",
// zip: "98101",
// phone: "206-774-5967"
// }];
//
// var Main = React.createClass({
// //   getInitialState: () => {
// //     return {
// //       locations: [{
// //   name: "Seattle, 4th & Pike",
// //   address: "1234 Pike St",
// //   address2: "Suite 1337",
// //   contactEmail: "",
// //   replyEmail: "",
// //   city: "Seattle",
// //   state: "WA",
// //   zip: "98101",
// //   phone: "206-212-4434"
// // }, {
// //   name: "Seattle, 5th & Pine",
// //   address: "2345 Pine St",
// //   address2: "Suite 3200",
// //   contactEmail: "info@studiohq.com",
// //   replyEmail: "",
// //   city: "Seattle",
// //   state: "WA",
// //   zip: "98101",
// //   phone: "206-774-5967"
// // }]
// //     }
// //   },
// render: () => {
//   return (
//   <section className="outer">
//       <section className="left-container">
//         <h2>Studio<span>HQ</span></h2>
//       <Nav />
//       </section>
//       <section className="right-container">
//         <header className="results-header">
//         <h6>Happy Dance & Music</h6>
//           <Dropdown />
//         </header>
//         <Results />
//       </section>
//
//
//
//   </section>
//   );
// }
// });
//
// var Nav = React.createClass({
// render: () => {
//   return (
//     <ul className="primary-nav">
//     <li>Dashboard</li>
//     <li>Classes</li>
//     <li>Students</li>
//     <li>Payments</li>
//     <li>Staff</li>
//     <li>Settings</li>
//     <li>Log Out</li>
//   </ul>);
// }
// });
//
// var Dropdown = React.createClass({
// render: () => {
//   return (
//     <div>Seattle, 4th & Pike</div>
//   );
// }
// });
//
// var Results = React.createClass({
// render: () => {
//   return (
//     <section className="results-container">
//     <h2>Studio Settings</h2>
//     <Secondarynav />
//     <Locations />
//     </section>
//   );
// }
// });
//
// var Secondarynav = React.createClass({
// render: () => {
// return (
// <ul className="second-nav-list">
//     <li><a href="#">Company</a></li>
//     <li><a href="#">Locations</a></li>
//     <li><a href="#">Class Types</a></li>
//     <li><a href="#">Managers</a></li>
//     <li><a href="#">Billing Info</a></li>
//     <li><a href="#">Merchant Account</a></li>
//   </ul>
// );
// }
// });
//
// var Form = React.createClass({
// render: () => {
//   return (
//   <div>hello</div>
//   );
// }
// });
//
// var Locations = React.createClass({
// getInitialState: () => {
//   return {
//     formVisible: false
//   };
// },
//
// render: () => {
// //     var locationsArray = this.props.locations.map((location) => {
//
// //     });
// return (
//   <section className="locations-container">
// <div>Locations placeholder</div>
// {locations.map((location) => {
//       return <div onClick={this.showForm}>{location.name}</div>
//       {this.state.formVisible ? <Form /> : null
//       }
//     })}
//   <a href="#">Create New Location</a>
//    <div className="buttons-container">
//      <button id="button cancel-button">Cancel</button>
//      <button id="button save-button">Save</button>
//     </div>
//   </section>
// )
// },
//
// showForm: () => {
//   this.setState({formVisible: !this.state.formVisible})
// }
// });
//
// ReactDOM.render(<Main />, document.getElementById('container'));
