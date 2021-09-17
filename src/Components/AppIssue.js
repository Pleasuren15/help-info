import react, { useState } from "react";
import Topic from "./Topic";

export default function AppIssues() {
  const [topic, setTopic] = useState("Topic : Order Issue >>");
  return (
    <>
      <Topic title={topic} />
      <h1>App/Technical Issue Component For Testing</h1>
    </>
  );
}
