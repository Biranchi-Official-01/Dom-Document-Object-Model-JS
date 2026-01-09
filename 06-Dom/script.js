const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1766944036708-98c43b9a53d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // real image link
    tags: ["Designer", "Freelancer", "Creative"],
    description: "Passionate UI/UX designer crafting clean and modern interfaces."
  },
  {
    fullName: "Sara Khan",
    image: "https://images.unsplash.com/photo-1767792116845-b33f06ef7eaf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Developer", "Full Stack", "Open Source"],
    description: "Full-stack MERN developer who loves building scalable web apps."
  },
  {
    fullName: "Rohit Patel",
    image: "https://images.unsplash.com/photo-1767027151398-b38c23f3cd11?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Content Creator", "Youtuber", "Tech"],
    description: "Tech content creator sharing deep insights on development tools."
  },
  {
    fullName: "Emily Rose",
    image: "https://images.unsplash.com/photo-1766939228519-5f498be33e65?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Marketing", "Branding", "Strategy"],
    description: "Marketing strategist helping brands build stronger digital presence."
  }
];

var sum = ''

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h2>${elem.fullName}</h2>
            <h3>[ ${elem.tags.join(', ')} ]</h3>
            <p>${elem.description}</p>
        </div>`
})

var main = document.querySelector('main');

main.innerHTML = sum;