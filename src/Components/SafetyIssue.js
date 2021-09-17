import react, { useState } from "react";
import Topic from "./Topic";

export default function SafetyIssues() {
  const [topic, setTopic] = useState("Topic : Order Issue >>");
  return (
    <>
      <Topic title={topic} />
      <h1>Safety Issue Component For Testing</h1>
    </>
  );
}
