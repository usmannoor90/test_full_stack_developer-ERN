import React from "react";

export default function Refecto({ data }) {
  //   console.log(data);
  const recur = (data) => {
    Object.keys(data).forEach((value, index) => {
      //   console.log(data[value]);
      if (Array.isArray(data[value])) {
        data[value]?.map((item, i) => {
          Object.keys(item).forEach((v) => {
            return (
              <pre>
                {v}:{item[v]}
              </pre>
            );
          });
        });
      } else {
        Object.keys(data).forEach((v) => {
          return (
            <pre>
              {v}:{data[v]}
            </pre>
          );
        });
      }
    });
  };

  return (
    <div className="code-block">
      <span>{recur(data)}</span>
    </div>
  );
}
