const myAPIUrl = "https://localhost:7249/api/getstate";

function searchState(){
    var state = document.getElementById('stateString').value;
    if(state){
        const myHeaders = new Headers();

        const myRequest = new Request(myAPIUrl, {
            method: "GET",
            headers: myHeaders,
            mode: "no-cors",
            cache: "default",
        });
        //Proceed to call API
        fetch(myRequest)
            .then((response) => {
                const contentType = response.headers.get("content-type");
                if(!contentType || !contentType.includes("application/json"))
                {
                    console.log(contentType);
                    throw new TypeError("Opps, not JSON!");
                }
                console.log(response.json());
            })        
    }
    else{
        //Return input Null
        alert('Please Enter Value to Proceed');

    }
    

    
}