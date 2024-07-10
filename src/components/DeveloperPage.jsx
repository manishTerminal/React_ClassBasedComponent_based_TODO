import React from "react";

class DeveloperPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todo: [],
    };
  }

  addItem(item) {
    const todo = [...this.state.todo];
    todo.push(item);

    this.setState({
      todo,
      input: "",
    });

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>TODO APP</h1>
        <input
          type="text"
          // value={this.state.input}
          onChange={(e) => {
            this.setState({ input: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.addItem(this.state.input);
          }}
        >
          Add Todo
        </button>
        <ol>
          {this.state.todo.map((item, index) => {
            return (
              <li className="task-card" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default DeveloperPage;
