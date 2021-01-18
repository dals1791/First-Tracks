import React from "react"


const AllMtn = (props) => {
    const mountainList  = props.mtn.map((ele)=> {
        
        return(
            <>  
            <div key={ele.id} onClick={()=>{props.handleClick(ele.id)}}>
                
                {ele.name}
            </div>
            </>
        )
    })
    return <div>{mountainList}</div>
}

export default AllMtn