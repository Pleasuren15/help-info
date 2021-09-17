import React from "react";
import { useState } from "react";
import OrderIssues from "./OrderIssue";
import AppIssues from "./AppIssue"
import SafetyIssue from "./SafetyIssue"
import Topic from "./Topic";

export default function Issues() {
  const [topic, setTopic] = useState("All Topics");
  const [id, setId] = useState(null);

  const [listIssues, setListIssues] = useState([
    { id: "1", Name: "Order Issue", isShow: true },
    { id: "2", Name: "Safety Issue", isShow: true },
    { id: "3", Name: "App/technical Issue", isShow: true },
  ]);

  function changeIssuesComp(topic, id) {
    setTopic("Topic: " + topic + " >>");

    const listIssuesCopy = [...listIssues];

    for (let i = 0; i < listIssuesCopy.length; i++) {
      if (listIssuesCopy[i].id === id) {
        listIssuesCopy[i].isShow = false;
      }
    }
    setListIssues(listIssuesCopy);
    setId(id);
  }

  return (
    <> 
      {console.log(listIssues.filter((i) => i.isShow).length === listIssues.length)}    
      {listIssues.filter((i) => i.isShow).length === listIssues.length ? (<><Topic title={topic} /> 
        <ul className="issues-cat">
          {listIssues
            .filter((f) => f.isShow)
            .map((item) => (
              <li className="order-issue-item">
                <button onClick={() => changeIssuesComp(item.Name, item.id)}>
                  {item.Name} &gt;&gt;
                </button>
              </li>
            ))}
        </ul>
        </>
      ) : (
        <>
        {id == "1" ? <OrderIssues /> : id == "2" ? <SafetyIssue/> : id == "3" ? <AppIssues/> : <Issues/>}
        </>
      )}
    </>
  );
}
