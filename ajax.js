// AJAX = asynchronous javascript and xml
// JSON =   javascript object notation



// GET  = data retrived
// POST = create


$(document).ready(function(){
    
    //get

    // $("button").on("click", function(){
    //     $.get("https://jsonplaceholder.typicode.com/posts/1", function(data, status){
    //         console.log(data)
    //     })
    // })


    //post

    $("button").on("click", function(){

        let data = {
            "userId": 101,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }

        $.post("https://jsonplaceholder.typicode.com/posts", data, function(data, status){
            console.log(data)
        })
    })
})






