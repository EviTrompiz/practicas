window.onload = function () {
    let data = {
        image_id: "asf2",
        sub_id: "my-user-1234",
        value: 1
    }
     let settings = {
         "method": "POST",
         "headers": {
             "content-type": "application/json",
         },
         "body": JSON.stringify(data)
     }

    fetch("https://api.thecatapi.com/v1/votes", settings)
    .then(function(response){
        return response.json();
    })
    .then(function(info){
        console.log(info);
    })
    .catch(function(e){
        alert("Error! " + e);
    })
}