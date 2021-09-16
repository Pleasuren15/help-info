import react , { useState } from "react";
import Topic from "./Topic";

export default function OrderIssues(){
    const[topic, setTopic] = useState("Topic : Order Issue >>")
    const [listOrderIssues,setListOrderIssues] = useState( [ {"id" : "1","Name" : "My order was cancelled","Desc": "My order was cancelled dsajdbusa uhsabduhsab", "isExpanded" : false , "isShow" : true},
                          {"id":"2","Name" :"Multiple charges for a single order", "Desc":"Multiple charges for a single order dsajdbusa uhsabduhsab","isExpanded" : false, "isShow" : true},
                          {"id":"3","Name" :"My entire order is wrong ","Desc": "My entire order is wrong  dsajdbusa uhsabduhsab","isExpanded" : false, "isShow" : true}]);

    function updateProps(id){
        let listOrderIssuesCopy = [...listOrderIssues];

        for(let i = 0; i < listOrderIssuesCopy.length; i++){
            if(listOrderIssuesCopy[i].id === id)
            {
                 listOrderIssuesCopy[i].isExpanded = !listOrderIssuesCopy[i].isExpanded;
                 listOrderIssuesCopy[i].isShow = true;
                 setTopic("Topic : Order Issue >> " + listOrderIssuesCopy[i].Name)
            }
            else{
                 listOrderIssuesCopy[i].isShow =!listOrderIssuesCopy[i].isShow ;
            }
        }

        let i = listOrderIssuesCopy.filter(i => i.isExpanded == true).length == 0 ? setTopic("Topic : Order Issue >>") : null;

        setListOrderIssues(listOrderIssuesCopy);
    }
    
    return(
        <>
        <Topic title={topic} />
        {listOrderIssues.map(item =>        
        item.isShow? 
        <div className="order-issue-item"><p>{item.Name}</p> <button onClick={() => updateProps(item.id)}><img className={item.isExpanded ? "rotate-img-up" : "rotate-img-down"} src="https://img.icons8.com/material-sharp/20/000000/expand-arrow--v1.png"/></button></div>
            :null)}

        {listOrderIssues.map(item =>        
        item.isExpanded? 
        <div><p>{item.Desc}</p></div>:null)}
        </>
    )
}