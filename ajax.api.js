// Jquery ajax api

// https://reqres.in/api/users


$(document).ready(function(){
    
    // console.log($("#name").val())
    
    $("#add").on('click', function(){
        
        let data = {
            "name":$("#name").val(),
            "drink":$("#drink").val()
        }
        
        $.ajax({
            type:"POST",
            url:"https://reqres.in/api/users",
            data:data,
            success:function(response){
                console.log(response)
                $("ul #liname").append(", "+response.name)
                $("ul #lidrink").append(", "+response.drink)
            },
            error:function(error){
                console.log(error)
            }
        })
    })
})



