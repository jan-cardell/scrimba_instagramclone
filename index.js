const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let post = document.getElementById("post")

for(let i = 0; i < posts.length; i++){
    let newpost = 
            `<div class="post-head">
                <img src="${posts[i].avatar}" class="avatar">
                <div>
                    <h1 id="post-name">${posts[i].name}</h1>
                    <h2 id="post-location">${posts[i].location}</h2>
                </div>
            </div>
            <img src="${posts[i].post}" class="post-picture">
            <div>
                <div class="post-reactions">
                    <img src="images/icon-heart.png" class="reactions">
                    <img src="images/icon-comment.png" class="reactions">
                    <img src="images/icon-dm.png" class="reactions">
                </div>
                <p class="post-likes">${posts[i].likes} likes</p>
                <p class="post-comment"><span class="post-comment-name">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>`
    post.innerHTML += newpost
}