```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="form" element={<ContactForm/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>Home</div>
  )
}
function About(){
  return(
    <div>About</div>
  )
}
function Contact(){
  return(
    <div>Contact</div>
  )
}
function ContactForm(){
  return(
    <div>ContactForm</div>
  )
}
export default App; 
```