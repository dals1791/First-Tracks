import React from "react"


const AllMtn = (props) => {
    const mountainList  = props.mtn.map((ele, index)=> {
        return(
            <>  
            <div key={index} onClick={()=>{props.handleClick(index)}}>
                {ele.name}
            </div>
            </>
        )
    })
    return <div>{mountainList}</div>
}

export default AllMtn