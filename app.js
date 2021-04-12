const Person = (props) => {
  return (
    <li>
      {props.person}
      <button onClick={props.handleClick}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: ["Jan K.", "Piotr C.", "Marysia W.", "John S."],
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
      <Person key={index} person={person} handleClick={this.handleClick.bind(this, index)} />
    ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.querySelector(`#root`));
