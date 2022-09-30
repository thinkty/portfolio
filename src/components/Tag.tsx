import React from "react";

export function Tag({
  name,
  id,
} : {
  name: string,
  id: string,
}) {
  return (
    <div className="tag" id={id}>
      &gt;&nbsp;
      <div className="name">
        {name}
      </div>
      <div className="blinker">
        &#9612;
      </div>
    </div>
  );
}
