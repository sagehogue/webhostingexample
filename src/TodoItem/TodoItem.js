import React, { Component } from "react";

import styled from "styled-components";
import { ReactComponent as Checkmark } from "./checkmark.svg";
import { ReactComponent as CloseSVG } from "./close.svg";

const Item = styled.li`
  width: 85%;
  padding: 3px 5px;
  transition: all 0.2s;
  background-color: "white";

  border: 1px solid #88a09e;
  border-radius: 5px;
  margin: 0.5rem auto 0 auto;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  list-style-type: none;
  display: ${props => (props.display ? "inline-block" : "none")};
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  text-align: left;
  position: relative;
  z-index: 1;
  &:first-of-type {
    margin-top: 1rem;
  }
  &::after {
    transition: all .2s
    z-index: 2;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom, #24f25b, #099e31);
    opacity: ${props => (props.completed ? 0.5 : 0)};
  }
`;

const Wrapper = styled.div`
  display: ${props => (props.display ? "inline-block" : "none")};
`;

const Checkbox = styled.button`
  padding: 3px;
  background-color: white;
  border: 1px solid #88a09e;
  margin: 0 0.25rem;
  height: 1.7rem;
  width: 1.7rem;
`;
// position: absolute;
// left: -4.5%;
// top: -1px;

const Deletebox = styled.button`
  padding: 3px;
  color: red;
  font-size: 2rem;
  background-color: white;
  border: 1px solid #88a09e;
  height: 1.7rem;
  width: 1.7rem;
  margin: 0 0.25rem;
  position: relative;
`;
// position: absolute;
// left: 100%;
// top: -1px;

// Write some code checking <Item> props that gives it css for either display hidden or a strikethrough/completed look.
// Also make 2 buttons and attach that functionality to them (changing props)

class TodoItem extends Component {
  state = {
    display: "true",
    completed: false
  };

  style = {
    position: "absolute",
    top: "0",
    left: "0"
  };

  toggleTaskCompletion = () => {
    this.setState(oldState => {
      return { ...oldState, completed: !oldState.completed };
    });
  };

  toggleDisplay = () => {
    this.setState(oldState => {
      return { ...oldState, display: false };
    });
  };

  render() {
    return (
      <Wrapper display={this.state.display ? true : undefined}>
        <Checkbox onClick={this.toggleTaskCompletion}>
          <Checkmark />
        </Checkbox>
        <Item display={this.state.display} completed={this.state.completed}>
          {this.props.children}
        </Item>
        <Deletebox onClick={this.toggleDisplay}>
          <CloseSVG height="1.6rem" width="1.6rem" style={this.style} />
        </Deletebox>
      </Wrapper>
    );
  }
}

export default TodoItem;
