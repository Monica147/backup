// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import './profile.css';

// function Profile1() {
//   const containeerrrStyle = {
//     background: "white",
//     padding: "20px",
//     borderRadius: "15px",
//     color: "black",
//     width: "80%", 
//     margin: "auto",
//     display: "flex",
//     marginTop: "15px",
//   };


//   const detailsBoxStyle = {
//     background: "#b4e7e3",
//     borderRadius: "10px",
//     marginTop: "10px",
//     flex: 1, 
//     width: "50%",
//     fontFamily: "Arial, sans-serif",
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
//     transition: "box-shadow 0.3s ease", 
//     position: "relative", 
//     overflow: "hidden", 
//     transform: "scale(1)", 
//     transition: "transform 0.3s ease", 
//     cursor: "pointer", 
//     "&:hover": { 
//         transform: "scale(1.05)", 
//         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"
//     }
//     };

 

//   const [isEditMode, setIsEditMode] = useState(false);
//   const [number, setNumber] = useState("");
//   const [education, setEducation] = useState("");
//   const [first, setFirst] = useState("");
//   const [last, setLast] = useState("");
//   const [email, setEmail] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [certificate, setCertificate] = useState([]);
//   const [linkedinLink, setLinkedinLink] = useState('');
//   const [githubLink, setGithubLink] = useState('');
//   const [currentSkill, setCurrentSkill] = useState("");
//   const [currentCertificate, setCurrentCertificate] = useState("");
//   const [resumeLink, setResumeLink] = useState("");
//   const [lang,setLang] = useState([]);
//   const [currentLang,setCurrentLang]=useState("");
//   const [yop,setYop]=useState("")

//   const handleEditClick = () => {
//     setIsEditMode(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditMode(false);
//   };

//   const handleCancelClick = () => {
//     setIsEditMode(false);
//   };

//   const handleNumberChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const handleEducationChange = (e) => {
//     setEducation(e.target.value);
//   };
  
//   const handleFirstChange = (e) => {
//     setFirst(e.target.value);
//   };
  
//   const handleLastChange = (e) => {
//     setLast(e.target.value);
//   };
  
//   const handleSkillChange = (e) => {
//     setCurrentSkill(e.target.value);
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleYopChange = (e) => {
//     setYop(e.target.value);
//   };
//   const handleLangChange = (e) =>{
//     setCurrentLang(e.target.value)
//   }

//   const handleAddSkill = () => {
//     if (currentSkill.trim() !== "") {
//       setSkills([...skills, { skill: currentSkill.trim(), rating }]);
//       setCurrentSkill("");
//       setRating(0);
//     }
//   };
    
//   const handleAddCertificate = () => {
//     if (currentCertificate.trim() !== "") {
//       setCertificate([...certificate, currentCertificate.trim()]);
//       setCurrentCertificate("");
//     }
//   };
//   const handleAddLang = () => {
//     if (currentLang.trim() !== "") {
//       setLang([...lang, { lang: currentLang.trim() }]); 
//       setCurrentLang(""); 
//     }
//   };
  

//   const handleCertificateChange = (e) => {
//     setCurrentCertificate(e.target.value);
//   };
  
//   const handleInputChange = (e, type) => {
//     const newLink = e.target.value;
//     if (type === 'linkedin') {
//       setLinkedinLink(newLink);
//     } else if (type === 'github') {
//       setGithubLink(newLink);
//     } else if (type === 'resume') {
//       setResumeLink(newLink);
//     }
//   };

//   return (
//     <div style={containeerrrStyle}>
//       {/* <div style={userBoxStyle}>
//         <img
//           src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
//           alt="User"
//           style={imageStyle}
//         />
//         <h4>User</h4>
//       </div> */}
//       <div style={detailsBoxStyle}>
//         {isEditMode ? (
//           <div className="DtaIlsDIV">
//             <label className="proInputBox">
//               First Name:
//               <input
//               className="niupt"
//                 type="text"
//                 value={first}
//                 onChange={(e) => handleFirstChange(e)}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label className="proInputBox">
//               Last Name:
//               <input
//               className="niupt"
//                 type="text"
//                 value={last}
//                 onChange={handleLastChange}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label className="proInputBox">
//               Number:
//               <input
//               className="niupt"
//                 type="text"
//                 value={number}
//                 onChange={handleNumberChange}
//                 style={{ width: "70%", height:"30%",marginLeft:"2rem"}}
//               />
//             </label>
//             <label className="proInputBox">
//               Email:
//               <input
//               className="niupt"
//                 type="text"
//                 value={email}
//                 onChange={handleEmailChange}
//                 style={{ width: "70%", height:"30%",marginLeft:"3rem"}}
//               />
//             </label>
//             <label className="proInputBox">
//               Education:
//               <input
//               className="niupt"
//                 type="text"
//                 value={education}
//                 onChange={handleEducationChange}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label className="proInputBox">
//               Year of Passing:
//               <input
//               className="niupt"
//                 type="text"
//                 value={yop}
//                 onChange={handleYopChange}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
           
//             <label className="proInputBox">
//               LinkedIn:
//               <input
//               className="niupt"
//                 type="text"
//                 value={linkedinLink}
//                 onChange={(e) => handleInputChange(e, 'linkedin')}
//                 style={{ width: "70%", height:"30%",marginLeft:"1.6rem"}}
//               />
//             </label>
//             <label className="proInputBox">
//               Resume:
//               <input
//               className="niupt"
//                 type="text"
//                 value={resumeLink}
//                 onChange={(e) => handleInputChange(e, 'resume')}
//                 style={{ width: "70%", height:"30%",marginLeft:"1.6rem"}}
//               />
//             </label>
            
//             <label className="proInputBox">
//               GitHub:
//               <input
//               className="niupt"
//                 type="text"
//                 value={githubLink}
//                 onChange={(e) => handleInputChange(e, 'github')}
//                 style={{ width: "70%", height:"30%",marginLeft:"2.3rem"}}
//               /></label>
//                <label className="proInputBox">
//             Languages Known:
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <input className="niupt"
//                   type="text"
//                   value={currentLang}
//                   onChange={(e) => handleLangChange(e)}
//                   style={{ width: "50%", height: "30%" }}
//                 />
//                 <button className="btnprofileadd" onClick={handleAddLang} style={{ marginLeft: "10px" }}>
//                   Add
//                 </button>
              
//               </div>
//             </label>
//                 <label className="proInputBox">
//               Certifications:
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <input className="niupt"
//                   type="text"
//                   value={currentCertificate}
//                   onChange={(e) => handleCertificateChange(e)}
//                   style={{ width: "50%", height: "30%" }}
//                 />
//                 <button className="btnprofileadd" onClick={handleAddCertificate} style={{ marginLeft: "10px" }}>
//                   Add
//                 </button>
              
//                 <button className="btnprofilecancel" onClick={handleCancelClick}>Cancel</button>
//               </div>
//             </label>
//             <label className="proInputBox">
//   Skills:
//   <div style={{ display: "flex", alignItems: "center" }}>
//     <input
//       type="text"
//       value={currentSkill}
//       onChange={(e) => handleSkillChange(e)}
//       style={{ width: "50%", height: "30%",marginLeft:"1.6rem" }}
//     />
//     <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
//       {Array.from({ length: 5 }).map((_, index) => (
//         <span
//           key={index}
//           onClick={() => handleRatingChange(index + 1)}
//           style={{
//             cursor: "pointer",
//             fontSize: "24px",
//             color: index < rating ? "gold" : "grey",
//             marginRight: "5px", 
//           }}
//         >
//           &#9733;
//         </span>
//       ))}
//     </div>
//     <button className="btnprofileadd" onClick={handleAddSkill} style={{ marginLeft: "10px" }}>
//       Add
//     </button>
//     <button className="btnprofilesave" onClick={handleSaveClick}>Save</button>
//             <button className="btnprofilecancel" onClick={handleCancelClick}>Cancel</button>
//   </div>
// </label>


        
            
          
//           </div>
//         ) : (
          
//           <div className="content-container">
//           <div className="content-item">
//             <p className="contentG">First name: {first}</p>
//             <p className="contentG">Last name: {last}</p>
//             <p className="contentG">E-mail: {email}</p>
//             <p className="contentG">Phone Number: {number}</p>
//           </div>
//           <div className="content-item">
//             <p className="contentG">Certificate:</p>
//             <ul>
//               {certificate.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="content-item">
//             <p className="contentG">Skills:</p>
//             <ul>
//               {skills.map((item, index) => (
//                 <li key={index}>{`${item.skill} (${item.rating} stars)`}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="content-item">
//             <p className="contentG">Education: {education}</p>
//             <p className="contentG">Year of Passing: {yop}</p>
//           </div>
//           <div className="content-item">
//             <p className="contentG">Languages Known:</p>
//             <ul>
//               {lang.map((item, index) => (
//                 <li key={index}>{item.lang}</li> 
//               ))}
//             </ul>
//           </div>
//           <div className="content-item">
//             <p className="contentG">LinkedIn: {linkedinLink}</p>
//             <p className="contentG">GitHub: {githubLink}</p>
//             <p className="contentG">Resume: {resumeLink}</p>
//           </div>
//           <div className="content-item">
//             <button className="btnprofile" onClick={handleEditClick}>Edit</button>
//           </div>
//         </div>
        
            
          
           
//         )}
//        </div>
      
//     </div>
//   );
// }
// export default Profile1;

