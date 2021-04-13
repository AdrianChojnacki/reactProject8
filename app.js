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
    // people: ["Jan K.", "Piotr C.", "Marysia W.", "John S."],
    people: [
      { id: 1, name: "Jan K." },
      { id: 2, name: "Piotr C." },
      { id: 3, name: "Marysia W." },
      { id: 4, name: "John S." },
    ],
  };

  handleClick = (index) => {
    let people = this.state.people;
    people.splice(index, 1);

    this.setState({
      people,
    });
  };

  render() {
    const people = this.state.people.map((person, index) => (
      <Person key={person.id} name={person.name} handleClick={this.handleClick.bind(this, index)} />
    ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.querySelector(`#root`));
