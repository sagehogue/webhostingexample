import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import GlobalStyle from "./globalstyle";
import theme from "./theme";

import "./App.module.css";

import TodoItem from "./TodoItem/TodoItem";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.main};
  text-align: center;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
`;

const AppHeading = styled.h1`
  font-size: 50px;
  font-weight: 700;
  display: block;
  color: palevioletred;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  margin-top: 9rem;
`;

const Input = styled.input`
  value: "Add a new task!";
  font-size: 1.3rem;
  padding: 5px;
  grid-row: 2 / 3;
  grid-column: 2 / 5;
  height: 20%;
  width: 80%;
  margin-top: 9rem;
  justify-content: center;
  align-items: center;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  grid-row: 3 / -1;
  grid-column: 2 / 5;
  width: 100%;
  padding: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      textInput: "",
      todos: []
    };
  }

  componentDidMount() {
    this.focusTextInput();
  }
  focusTextInput() {
    this.textInput.current.focus();
  }

  addToDo(todo) {
    this.setState((previousState, props) => {
      return { todos: [...previousState.todos, todo] };
    });
  }

  inputHandler = event => {
    if (event.keyCode == 13 && this.textInput.current.value) {
      this.addToDo(this.textInput.current.value);
      this.textInput.current.value = "";

      console.log();
    }
  };

  render() {
    // Generates todos with unique key from uuid package
    const todos = this.state.todos
      ? this.state.todos.map(todoItem => {
          return <TodoItem key={uuidv4()}>{todoItem}</TodoItem>;
        })
      : null;
    return (
      <>
        <AppContainer>
          <AppHeading>Todos</AppHeading>
          <Input ref={this.textInput} onKeyDown={this.inputHandler} />
          <TodoList>{todos}</TodoList>
        </AppContainer>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
