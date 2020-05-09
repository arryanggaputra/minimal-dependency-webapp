const { render } = window.preact;
const { Router } = window.preactRouter;
const { Provider, connect, createStore } = window.unistore;

//component & libs
import html from "./lib/htm.js";
import Header from "./lib/components/Header.js";

//pages
import Home from "./lib/pages/Home.js";
import Todo from "./lib/pages/Todo.js";

let store = createStore({ todos: ["Sample Todo"] });

let actions = {
  addTodos(state, value) {
    if (!value) return;
    let todos = [...state.todos];
    todos.push(value);
    return { todos };
  },
  removeTodos(state, id) {
    let newTodos = state.todos.filter((item, index) => {
      return index !== id;
    });
    return { todos: newTodos };
  },
};

const Homepage = connect("todos", actions)(Home);
const Todopage = connect("", actions)(Todo);

function App() {
  return html`
    <div>
      <${Header} url=${this.state.url} />
      <div class="p-6">
        <${Provider} store=${store}>
          <${Router} onChange=${(e) => this.setState(e)}>
            <${Homepage} path="/" />
            <${Todopage} path="/todo" />
            <${NotFound} default />
          <//>
        <//>
      </div>
    </div>
  `;
}

const NotFound = () =>
  html`<section>
    <h1>404: Not Found</h1>
    <p>It's gone :(</p>
  </section>`;

render(html` <${App} /> `, document.body);
