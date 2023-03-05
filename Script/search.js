const ul = document.getElementById('states');
const list = document.createDocumentFragment();
const myAPIUrl = "https://localhost:7249/api/getstate";
//const myAPIUrl = "https://jsonplaceholder.typicode.com/users";

function searchState(){
    fetch(myAPIUrl)
        .then((response) => {
            if(response.status == 200){
                console.log(response.status);
                return response.json();
            }
            else if(response.status == 500){
                console.log(response.status);
                alert("Oh no API Down!");
            }
                
        })
        .then((data) => {
            let states = data;
            console.log(states);
            console.log(states.data);
            length=data.data.length
            var temp="";
            for(i=0;i<length;i++){
                temp+="<tr>";
                temp+="<td>"+data.data[i].state+"</td>";
                temp+="<td>"+data.data[i].capital+"</td>";
            }
            document.getElementById("tblStates").innerHTML=temp;
        });
        
}
