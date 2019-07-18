$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
            .val()
            .tirm(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Add a new burger successfully heyo burgercreate.js");
            location.reload();
        });
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured, yum yum on burgercreate.js file");
            location.reload();
        });
    });
        $(".trashburger").on("click", function (event) {
            event.preventDefault();

            var id= $(this).data("id");

            //send the delete request
            $.ajax({
                type: "DELETE",
                url: "/api/burgers/" + id
            }).then(location.reload());
    });
});

