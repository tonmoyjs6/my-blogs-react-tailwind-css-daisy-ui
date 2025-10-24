import { Suspense } from "react"
import Blogs from "./components/Blogs/Blogs"


const apiFetch=async()=>{

  const res= await fetch("api.json")

  return res.json()

}




function App() {
    const blogsFetch=apiFetch()
  return (
    <>
          <div>
            <div className="navbar bg-primary text-primary-content">
      <button className="btn btn-ghost text-xl">My Blog</button>
    </div>
          </div>
<Suspense>

  <Blogs blogsFetch={blogsFetch}></Blogs>
      

</Suspense>
        

    </>
  )
}

export default App
