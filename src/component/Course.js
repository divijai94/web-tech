import React from "react";
const Course = () => {
    return(
        < div className="course" style={{textAlign:"center"}}>
            <h1>welcome to Course page</h1>
            <ul>
                <h3>Front End</h3>
                <li>HTML</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>Mongodb</li>
                <li>React</li>
            </ul><br></br>
            <ul>
                <h3>BackEnd</h3>
                <li>Nodejs</li>
                <li>Express.js</li>
                <li>DBMS</li>
                <li>SQL</li>
            </ul>
        </div>
    )
}
export default Course