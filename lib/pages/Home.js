const { Component } = window.preact;

import html from "../htm.js";

export default class Home extends Component {
  render() {
    return html`<div class="w-6/12 bg-gray-100">
      <h1 class="font-bold text-lg p-3">List of Todo</h1>
      ${this.props.todos.map((item, index) => {
        return html`
          <div class="flex px-3 py-2 border-b border-gray-300">
            <div class="mr-2">
              <button
                onclick="${() => {
                  this.props.removeTodos(index);
                }}"
                class="text-xs px-1 bg-red-600 text-white"
              >
                delete
              </button>
            </div>
            <div>${item}</div>
          </div>
        `;
      })}
    </div> `;
  }
}
