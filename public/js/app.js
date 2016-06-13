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
        React.createElement("h4", null, "Happy Dance & Music"), 
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

var FormRender = React.createClass({displayName: "FormRender",
  render: () => {
    return (
      React.createElement("section", {className: "form"}, 
        React.createElement("h1", null, "hello")
      )
    )
  }
})

var Locations = React.createClass({displayName: "Locations",
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
  React.createElement("section", {className: "locations-container"}, 
locations.map((location, i) => {
      var formState = false;
      var handleClick = () => {
        this.formState ?
        this.formState = false :
        this.formState = true;
      }
      return React.createElement("div", {key: location.id, onClick: this.clickHandler, className: "location-instance"}, location.name)
      { this.state.showForm ? React.createElement(FormRender, null) : null }

      // return ( <section>
      //   <div key={location.id} onClick={handleClick()}>{location.name}</div>
      // { this.formState ? <div>hello</div> : null }
      // </section>);

    }), 
  React.createElement("a", {className: "location-instance", href: "#"}, "Create New Location"), 
   React.createElement("div", {className: "buttons-container"}, 
     React.createElement("button", {id: "button cancel-button"}, "Cancel"), 
     React.createElement("button", {id: "button save-button"}, "Save")
    )
  )
);
},
  showForm: () => {
  console.log("hello");
}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('container'));
