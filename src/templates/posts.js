import { navigate } from "../router/routes.js";
import {createPost, printPost} from "../firebase/databaseservice.js"
//import {login} from "../templates/login.js"
function wall() {
  //Feed
  const postsWall = document.createElement("div");
  postsWall.className = "wall";

  // Fondo de frutas y verduras
  const bgFruit = document.createElement("div");
  bgFruit.className = "bgTop";
  postsWall.appendChild(bgFruit);
  
  //Fondo logo celeste
  const bglogo=document.createElement("div");
  bglogo.className= "bgLeFestin";
  bgFruit.appendChild(bglogo);
  
  //Logo Le Festin
  const logo = document.createElement("img");
  logo.src = "./img/logo2.png";
  logo.className = "logoFeed";
  bglogo.appendChild(logo);

  //Div contenedeor de nombre usuario y boton salir.
  const userName = document.createElement("div");
  userName.className = ('user');
  const logOutLogo= document.createElement("img");
  logOutLogo.className = ('logOutLogo');
  logOutLogo.src = "./img/logout.png";

  //const dataUser = document.createElement('h4');
  //dataUser.className = ('dataUser');
  //dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${wall.displayName}`;
  postsWall.appendChild(userName);
  userName.appendChild(logOutLogo);
  

  //Fondo para contener los post amarillo
  const bgPost = document.createElement("div");
  bgPost.className = "bgPost";
  postsWall.appendChild(bgPost);
  
  //Título para escribir posts
  const title = document.createElement("h2");
  title.innerHTML = "¿Qué estas preparando?";
  title.className = "title";
  bgPost.appendChild(title);

  //Input para escribir posts
  const post = document.createElement("textarea");
  post.className = "post";
  bgPost.appendChild(post);

  //Botón para publicar posts
  const postBtn = document.createElement("button");
  postBtn.innerHTML = "Publicar";
  postBtn.className = "postBtn";
  bgPost.appendChild(postBtn);
  
  //Contenedor Padre de post
  const containerPost = document.createElement("div");
  containerPost.setAttribute("id","postPrint");
  containerPost.className="cPost";
  postsWall.appendChild(containerPost);
  //Scroll

  //contenedor hijo de cpost donde se imprimen las publicaciones.
  //const publicationContainer = document.createElement("div");
  //publicationContainer.setAttribute("id","pcontainer");
  //publicationContainer.appendChild(containerPost);

  //Funcion para publicar posts en el muro
postBtn.addEventListener("click", (event) => {
const valuePost = post.value;
console.log ("Nuestro boton de publicar sí funciona!");
createPost(valuePost);
post.value = "" ;
//e.preventDefault();
//savePost(post);
printPost();

//intento de mantener post en el muro
   
        //e.preventDefault();
       // verification();
        
       // savePost(post);

    //});

});

  // función boton logout
  logOutLogo.addEventListener("click", () => {
  navigate("/");
  const cleanEmail = document.getElementById ('email')
  cleanEmail.value = " ";
  const cleanPassword = document.getElementById ('password')
  cleanPassword.value = "";
  });

  return postsWall;
}


export { wall };

