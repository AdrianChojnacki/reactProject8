const Person = (props) => {
  return (
    <li>
      {props.person}
      <button onClick={props.handleClick(props.person)}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: ["Jan K.", "Piotr C.", "Marysia W.", "John S."],
  };

  handleClick = (person) => {
    console.log(person);
    // this.setState({
    //   people: this.state.people.splice(index, 1),
    // });
  };

  render() {
    const people = this.state.people.map((person, index) => (
      <Person key={index} person={person} handleClick={this.handleClick} />
    ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.querySelector(`#root`));
