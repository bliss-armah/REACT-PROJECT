import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuList, setMenuList] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (specific) => {
    if (specific === "all") {
      return setMenuList(items);
    }
    const getSpecific = items.filter((item) => item.category === specific);
    setMenuList(getSpecific);
  };

  return (
    <main>
      <section className="main section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} myItems={filterItems} />
        <Menu items={menuList} />
      </section>
    </main>
  );
}

export default App;
