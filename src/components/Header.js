import '../styles/Header.css'
function Header({text}) {
    return(
    <>
     <div className = "header_content">
      <h1>{text}</h1>
      <p>Create a free account</p> 
     </div> 
    </> 
    )
}
export default Header