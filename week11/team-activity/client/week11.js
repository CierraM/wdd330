import makeRequest from './authHelpers.js'
import Auth from './auth.js'

const auth = new Auth()
let posts

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    auth.login(getPosts)
})

async function getPosts() {
    const data = await makeRequest("posts", "GET", null, auth.token)
    console.log(data)
    
    let h1 = document.createElement("h1")
    h1.textContent = 'Posts'
    document.body.appendChild(h1)
    data.forEach(post => {
        let div = document.createElement("div")

        let h3 = document.createElement("h3")
        h3.textContent = post.title

        let p = document.createElement("p")
        p.textContent = post.content

        div.appendChild(h3)
        div.appendChild(p)
        document.body.appendChild(div)
    })
}