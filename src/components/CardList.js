import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <React.Fragment>
      {robots.map((user, idx) => {
        return (
          <Card
            key={idx}
            id={robots[idx].id}
            name={robots[idx].name}
            email={robots[idx].email}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CardList;
