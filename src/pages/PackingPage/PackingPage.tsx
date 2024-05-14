import { JSX } from "react/jsx-runtime";
import Header from "../../reusables/Header/Header";
import { useEffect } from "react";

const PackingPage = () => {
  useEffect(() => {
  fetch('http://localhost:3000/PackingPage', {
    method:"GET"
  }).then(response => {
   return response.json();
  }).then(data => {
    return console.log("data",data)
  })
})

return (
    <>
      <Header />

      <div className="page-content">
        <h1>Packing Page</h1>

        <p>This is an example page. Use this example to create your own pages</p>
      </div>
    </>
  )
}

export default PackingPage;


