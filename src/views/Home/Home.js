import "./Home.css"
import StudentCard from "./../../components/StudentCard/StudentCard"
import img1 from "./../../components/StudentCard/img/1.jpg"
import img2 from "./../../components/StudentCard/img/2.jpg"
import img3 from "./../../components/StudentCard/img/3.jpg"
import img4 from "./../../components/StudentCard/img/4.jpg"

 const Home = () =>{
    return (
        <>  
        <h1> StudentCard</h1>

      <div className="studentcard-parent">
      <StudentCard studentName="Sakshi Awale"
         studentImage={img1} 
         micState={false}/>

        <StudentCard studentName="Ziya Bandely"
         studentImage={img2} 
         micState={true}
         />
        <StudentCard studentName="Savi Yerewar"
         studentImage={img3}
        micState={false}
        />
        <StudentCard studentName="Janvi Chincholkar"
         studentImage={img4}
         micState={false}  
         />
      </div>
        </>
    )
 }

 export default Home
