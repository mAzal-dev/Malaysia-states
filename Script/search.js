const ul = document.getElementById('states');
const list = document.createDocumentFragment();
const myAPIUrl = "https://localhost:7249/api/getstate";
//const myAPIUrl = "https://jsonplaceholder.typicode.com/users";

function searchState(){
    fetch(myAPIUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let states = data;
            console.log(states);
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
