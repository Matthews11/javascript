// realiza la peticion eimprime en una tabla
const listUsers=async()=>{
    const response = await fetch ("http://localhost:9090/user/all");
    const users = await response.json(); 

    let tableBody=``;
    users.forEach((user,index) => {
        tableBody+=`<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td> 
        </tr>`;
    }); 
    document.getElementById("table_users").innerHTML=tableBody;
    
}

const addUser=async()=>{

}




//verifica que se cargo y ejecuta una funcion
window.addEventListener("load",function(){
console.log("documento cargado");
    listUsers(); 
})