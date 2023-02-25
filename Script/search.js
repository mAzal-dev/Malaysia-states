const ul = document.getElementById('states');
const list = document.createDocumentFragment();
const myAPIUrl = "https://localhost:7249/api/getstate";
//const myAPIUrl = "https://jsonplaceholder.typicode.com/users";


// function searchState(){
//     var state = document.getElementById('stateString').value;
//     if(state){
//         const myHeaders = new Headers({
//             'Content-Type':'application/json'
//         });

//         console.log(myHeaders);

//         const myRequest = new Request(myAPIUrl, {
//             method: "GET",
//             headers: myHeaders,
//             mode: "cors",
//             cache: "default",
//         });
//         console.log(myRequest);
//         //Proceed to call API
//         fetch(myRequest, {
//             credentials:"include",
//         })
//             .then((response) => {
//                 const contentType = response.headers.get("content-type");
//                 if(!contentType || !contentType.includes("application/json"))
//                 {
//                     //console.log(contentType);
//                     throw new TypeError("Opps, not JSON!");
//                 }
//                 console.log(response.json());
//             })
//             .catch(function(){
//                 throw new TypeError("API Failed");
//             })        
//     }
//     else{
//         //Return input Null
//         alert('Please Enter Value to Proceed');

//     }
    

    
// }

function searchState(){
    fetch(myAPIUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let states = data;

            console.log(states);
        })
}
