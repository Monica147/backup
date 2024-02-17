// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import './content.css';

// function Profile() {
//   const containeerrrStyle = {
//     background: "white",
//     padding: "20px",
//     borderRadius: "15px",
//     color: "white",
//     width: "80%",  
//     margin: "auto",
//     display: "flex",
//     marginTop:"15px",
  
//   };

//   const userBoxStyle = {
//     background: "white",
//     padding: "20px",
//     borderRadius: "15px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginRight: "20px",
//     width: "50%",
//     fontFamily: "Arial, sans-serif",
//     fontSize:"40px",
//   };

//   const detailsBoxStyle = {
//     background: "lightblue",
   
//     borderRadius: "5px",
//     marginTop: "10px",
//     flex: 1, 
//     width: "50%",
//     fontFamily: "Arial, sans-serif",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "50%",
//     objectFit: "cover",
//     marginBottom: "10px", 
//   };

 

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
  
//   const handleCertificateChange = (e) => {
//     setCurrentCertificate(e.target.value);
//   };
  
//   const handleInputChange = (e, type) => {
//     const newLink = e.target.value;
//     if (type === 'linkedin') {
//       setLinkedinLink(newLink);
//     } else if (type === 'github') {
//       setGithubLink(newLink);
//     }
//     else if (type === 'resume') {
//       setResumeLink(newLink);
//     }
//   };

//   return (
//     <div style={containeerrrStyle}>
//       <div style={userBoxStyle}>
//         <img
//           src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
//           alt="User"
//           style={imageStyle}
//         />
//         <h4>User</h4>
//       </div>
//       <div style={detailsBoxStyle}>
//         {isEditMode ? (
//           <div>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 value={first}
//                 onChange={(e) => handleFirstChange(e)}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 value={last}
//                 onChange={handleLastChange}
//                 style={{ width: "70%", height:"30%", margin: "auto"}}
//               />
//             </label>
//             <label>
//               Number:
//               <input
//                 type="text"
//                 value={number}
//                 onChange={handleNumberChange}
//                 style={{ width: "70%", height:"30%", margin: "auto"}}
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="text"
//                 value={email}
//                 onChange={handleEmailChange}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label>
//               Education:
//               <input
//                 type="text"
//                 value={education}
//                 onChange={handleEducationChange}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label>
//               LinkedIn:
//               <input
//                 type="text"
//                 value={linkedinLink}
//                 onChange={(e) => handleInputChange(e, 'linkedin')}
//                 style={{ width: "70%", height:"30%" , margin: "auto"}}
//               />
//             </label>
//             <label>
//               Resume:
//               <input
//                 type="text"
//                 value={resumeLink}
//                 onChange={(e) => handleInputChange(e, 'resume')}
//                 style={{ width: "70%", height:"30%" , margin: "auto"}}
//               />
//             </label>
//             <label>
//               GitHub:
//               <input
//                 type="text"
//                 value={githubLink}
//                 onChange={(e) => handleInputChange(e, 'github')}
//                 style={{ width: "70%", height:"30%"}}
//               />
//             </label>
//             <label>
//               Certifications:
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <input
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
//             <label>
//               Skills:
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <input
//                   type="text"
//                   value={currentSkill}
//                   onChange={(e) => handleSkillChange(e)}
//                   style={{ width: "50%", height: "30%" }}
//                 />
//                 <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <span
//                       key={index}
//                       onClick={() => handleRatingChange(index + 1)}
//                       style={{
//                         cursor: "pointer",
//                         fontSize: "24px",
//                         color: index < rating ? "gold" : "grey",
//                         marginRight: "5px", 
//                       }}
//                     >
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>
//                 <button className="btnprofileadd" onClick={handleAddSkill} style={{ marginLeft: "10px" }}>
//                   Add
//                 </button>
//                 <button className="btnprofilesave" onClick={handleSaveClick}>Save</button>
//                 <button className="btnprofilecancel" onClick={handleCancelClick}>Cancel</button>
//               </div>
//             </label>
           
//           </div>
//         ) : (
//           <div>
//             <div>
//             <p className="contentname" >First name: {first}</p> </div>
//             <div>
//             <p className="contentl">Last name: {last}</p> </div>
//             <div>
//             <p className="contentm"> E-mail:{email}</p></div>
//             <div>
//             <p className="contentn">Number: {number}</p></div>
//             <div className="certificate-container">
//             <div>
//   <p className="contente">Certificate:</p>
//   <ul>
//     {certificate.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul>
// </div>

// </div>
//             <div className="certificate-container_1">
//   <p className="contents">Skills:</p>
//   <ul>
//     {skills.map((item, index) => (
//       <li key={index}>{`${item.skill} (${item.rating} stars)`}</li>
//     ))}
//   </ul>
// </div>

//             <div>
//             <p className="contente">Education: {education}</p></div>
       
// <div>
//             <p className="contentl">
//               LinkedIn: {linkedinLink}
//             </p></div>
//             <div>
//             <p className="contentG">
//               GitHub: {githubLink}
//             </p></div>
//             <div>
//             <p className="contentG">
//               Resume:{resumeLink}
//             </p></div>
//             <div className="container inputtop" style={{ marginTop: "20px" }}>
//             <button className="btnprofile" onClick={handleEditClick}>Edit</button></div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profile;
