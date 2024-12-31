const users = [

    {
        name:"Qurat",
        occupation:"Software Engineer",
        streak:true,
        profileImage:"https:images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name:"Fatima ",
        occupation:"ML Engineer",
        streak:true,
        profileImage:"https://plus.unsplash.com/premium_photo-1661476096004-c6157d87ef9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Fahad ",
        occupation:"ML Engineer",
        streak:true,
        profileImage:"https://media.istockphoto.com/id/922664652/photo/portrait-of-mid-adult-businessman-wearing-glasses-and-looking-at-camera.webp?a=1&s=612x612&w=0&k=20&c=P-WbX2XRdjz-DBQqR6KjK38hrnNkDc37UoEcWlewGAc="
    },
    {
        name:"Omer",
        occupation:"Cloud Engineer",
        streak:true,
        profileImage:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

];
function getUsers() {

    const main  = document.getElementById("main")

      setTimeout(() => {
        users.forEach((item)=>{
            const div  =  document.createElement("div")
            div.classList.add("user")
            main.append(div)

            const img = document.createElement("img")
            img.classList.add("img")
            img.src = item.profileImage;
            div.append(img);
    
            const div2 =  document.createElement("div");
            const p1 =  `<p clss="p-1">${item.name} </p> 
                         <p class="p-2">${item.occupation}</p>`
            div2.innerHTML = p1
            div.append(div2)
        });
        document.getElementById("loader").innerHTML = " ";
      }, 2000);
}
getUsers()