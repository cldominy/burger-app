$("#submit").on("click", function(){
    event.preventDefault();
    let burgerName = $("#text-box").val()
    let newBurger = {
    burger_name: burgerName,
    devoured: 0
    }
    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
    }).then(function(){
        console.log("New burger updated:" + newBurger)
        location.reload();
    });
});

$(".devourBtn").on("click", function(){
    event.preventDefault();
    let id = $(this).data(burgerID);
    
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: id,
    }).then(function(){
        console.log("Devoured" + id)
        location.reload();
    });
});