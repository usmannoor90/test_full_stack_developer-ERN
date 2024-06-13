import React from "react";

export default function Refacto({ data }) {
  const recur = (data) => {
    if (typeof data === "string") {
      try {
        const parsedData = JSON.parse(data);
        return recur(parsedData);
      } catch (e) {
        return data;
      }
    } else if (typeof data === "object" && data !== null) {
      return (
        <div>
          {Array.isArray(data)
            ? data.map((item, index) => <div key={index}>{recur(item)}</div>)
            : Object.keys(data).map((key, index) => (
                <div key={index}>
                  <strong>{key}:</strong> {recur(data[key])}
                </div>
              ))}
        </div>
      );
    } else {
      return data;
    }
  };

  return <div className="code-block">{recur(data)}</div>;
}
