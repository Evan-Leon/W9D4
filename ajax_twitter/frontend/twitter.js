const FollowToggle = require("./follow_toggle");









$(() =>{
    $(".follow-toggle").each(function (idx, button){
        // debugger
        new FollowToggle($(button));
    })
    // setEventHandlers();
});