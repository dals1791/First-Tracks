import React from "react"


const AllMtn = (props) => {
    const mountainList  = props.mtn.map((ele)=> {
        
        return(
            <div key={ele.id}>  
            <div className="mtntitle"  onClick={()=>{props.handleClick(ele.id)}}>
                
                {ele.name}
            </div>
            </div>
        )
    })
    return <div className="allMtns">{mountainList}</div>
}

export default AllMtn