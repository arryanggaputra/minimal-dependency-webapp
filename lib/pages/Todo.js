const { Component } = window.preact;

import html from "../htm.js";

export default class Todo extends Component {
  addTodo = () => {
    this.props.addTodos(document.getElementById("field_todo").value);
    document.getElementById("field_todo").value = "";
  };

  render() {
    return html`<div class="w-6/12 bg-gray-100 p-3">
      <input
        id="field_todo"
        type="text"
        placeholder="Add new task"
        class="border border-gray-300 px-3 py-1"
      />
      <button
        onclick="${this.addTodo}"
        class="px-3 py-1 bg-green-500 text-white"
      >
        Save Todo
      </button>
    </div> `;
  }
}
