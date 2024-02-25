import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
