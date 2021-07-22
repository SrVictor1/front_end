import style from "./styles/nav_bar.module.css";

function HeaderBar() {
  const header_bar = [{ name: "Novo Post", link: "#" }];

  return (
    <nav className={style.navbar}>
      <div>
        <a href="#">
          <h1>Logo</h1>
        </a>
      </div>
      <ul>
        {header_bar.map((iten) => (
          <li key={iten.name}>
            <a href={iten.link} >
              {iten.name}
            </a>
          </li>
        ))}
        <div></div>
      </ul>
    </nav>
  );
}

export default HeaderBar;
