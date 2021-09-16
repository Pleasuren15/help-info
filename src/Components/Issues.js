import React from "react";
import { useState } from "react";
import Topic from "./Topic";

export default function Issues() {
  const [topic, setTopic] = useState("All Topics");
  return (
    <>
      <Topic title={topic} />
      <ul className="issues-cat">
        <li>
          <button onClick={() => setTopic("Topic: Order Issue >>")}>
            Order Issue &gt;&gt;
          </button>
        </li>
        <li>
          <button onClick={() => setTopic("Topic: Safety Issue >>")}>
            Safety Issue &gt;&gt;
          </button>
        </li>
        <li>
          <button onClick={() => setTopic("Topic: App/technical Issue >>")}>
            App/technical Issue &gt;&gt;
          </button>
        </li>
      </ul>
    </>
  );
}
