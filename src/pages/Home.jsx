import { useEffect } from "react";
import Nav from "../components/Nav";

const Home = () => {

    useEffect(() => {
        console.log("See")
            
        async function getBlogs() {
            console.log("getting")
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            response = response.json()
            console.log(response)
            return response
        }
        console.log (response)
    getBlogs()
    }, [])

    let blogs= getBlogs()
    console.log(blogs)
    

    return (
        <>
            <Nav />
            <div>

            </div>
        </>
    );
}

export default Home;