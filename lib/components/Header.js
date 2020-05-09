import html from "../htm.js";

const Header = ({ url }) => html`
  <header class="px-4 py-2 bg-green-500">
    <nav>
      <a class="inline-block px-3 py-2 text-white hover:text-black" href="/"
        >Home</a
      >
      <a class="inline-block px-3 py-2 text-white hover:text-black" href="/todo"
        >Create Todo</a
      >
    </nav>
  </header>
`;

export default Header;
