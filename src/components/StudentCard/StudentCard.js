import "./StudentCard.css"
import Micon from "./../StudentCard/img/micon.png"
import Micoff from "./../StudentCard/img/micoff.png"
function StudentCard( {studentName,  studentImage, micState})
{
    return (
        <div className="studentcard-container">
< img src={micState ? Micon : Micoff} className="mic-img"/>
            <img src={studentImage} className="studentImage" />
            <span className="student-name-text" >{studentName} </span>
             </div>
    )
}

export default StudentCard 