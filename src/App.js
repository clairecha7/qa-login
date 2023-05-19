import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((item) => (
            <SingleQuestion key={item.id} title={item.title} info={item.info} />
          ))}
          {/* <SingleQuestion title={data[0].title} />
          <SingleQuestion title={data[1].title} />
          <SingleQuestion title={data[2].title} />
          <SingleQuestion title={data[3].title} />
          <SingleQuestion title={data[4].title} />  */}
        </section>
      </div>
    </main>
  );
}

export default App;
