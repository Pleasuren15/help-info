import react , { useState } from "react";
import Topic from "./Topic";

export default function OrderIssues(){
    const[topic, setTopic] = useState("Topic : Order Issue >>");

    const [listOrderIssues,setListOrderIssues] = useState( [ {"id" : "1","Name" : "My order was cancelled","Desc": "This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details", "isExpanded" : false , "isShow" : true},
                          {"id":"2","Name" :"Multiple charges for a single order", "Desc":"The generator does take into account which race is randomly picked, and changes some of the details accordingly. For example, if the character is an elf, they will have a higher chance of looking good and clean, they will, of course, have an elvish name, and tend to be related to more elvish related towns and people","isExpanded" : false, "isShow" : true},
                          {"id":"3","Name" :"My entire order is wrong ","Desc": "Random word brainstorming is a simple, creative technique using random words to generate new ideas and creative solutions to your problems.Random word brainstorming is a simple, creative technique using random words to generate new ideas and creative solutions to your problems.Random word brainstorming is a simple, creative technique using random words to generate new ideas and creative solutions to your problems.","isExpanded" : false, "isShow" : true}]);

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
        let i = listOrderIssuesCopy.filter(i => i.isExpanded).length == 0 ? setTopic("Topic : Order Issue >>") : null;
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