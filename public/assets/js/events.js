$(document).ready(function () {

    $(".btn-primary").on('click', function () {
        console.log('i am here!')
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour")

        var newDevourState = {
            devoured: newDevour
        };
        console.log(id);
        console.log(newDevour);
        console.log(newDevourState);


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                //         // Reload the page to get the updated list
                location.reload();
            }
        );
    })
    $(".create-form").on("submit", function (event) {
        // preventDefault for submit event
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: 0
        };

        // Send the PUT request to update databse
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});






$("#submit").on('click', function () {
    console.log('i am here!')

})

