const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.handleClick}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan K." },
      { id: 2, name: "Piotr C." },
      { id: 3, name: "Marysia W." },
      { id: 4, name: "John S." },
    ],
  };

  // handleClick(id) {
  //   const people = [...this.state.people];
  //   const index = people.findIndex((person) => person.id === id);

  //   people.splice(index, 1);

  //   this.setState({
  //     people,
  //   });
  // }

  handleClick(id) {
    // let people = Array.from(this.state.people);
    let people = this.state.people.slice();

    people = people.filter((person) => person.id !== id);

    this.setState({
      people,
    });
  }

  render() {
    // const people = this.state.people.map((person, index) => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     handleClick={this.handleClick.bind(this, person.id)}
    //   />
    // ));

    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        handleClick={this.handleClick.bind(this, person.id)}
      />
    ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.querySelector(`#root`));
