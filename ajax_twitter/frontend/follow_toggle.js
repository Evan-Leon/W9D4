
function FollowToggle($button){
    this.userId = $button.data("user-id");
    this.initialFollowState = $button.data("initial-follow-state");
    this.$button = $button;
    this.render();
}

FollowToggle.prototype.render = function() {
    if (this.initialFollowState == "unfollowed") {
        this.$button.text("Follow!");
    } else if (this.initialFollowState == "followed") {
        this.$button.text("Unfollow!");
    }
}

FollowToggle.prototype.handleClick = function() {
    this.$button.on("click", (e) => {
        e.preventDefault();
        if (this.initialFollowState == "unfollowed") {
            clickFollowAjax();
        } else if (this.initialFollowState == "followed") {
            clickUnfollowAjax();
        }
    })
}


module.exports = FollowToggle;