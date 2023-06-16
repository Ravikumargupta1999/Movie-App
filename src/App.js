import Student from "./Student";

function App() {
  return (
    <>
       <Student stuname ="Alexa" marks = {80}/>
       <Student stuname ="Siri" marks = {70}/>
       <Student stuname ="RISHIKA" marks = {60}/>
       <Student stuname ="RAVI" />
       <Student  marks = {60}/>
    </>
  );
  }

  Student.defaultProps ={
    stuname : "Student",
    marks : "N.A."
  }

export default App;
