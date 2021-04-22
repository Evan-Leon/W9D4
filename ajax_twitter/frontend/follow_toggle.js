const twitterAPIUtil = require("./twitter_api_util");
function FollowToggle($button){
    this.userId = $button.data("user-id");
    this.initialFollowState = $button.data("initial-follow-state");
    this.$button = $button;
    this.render();
    this.handleClick();
    
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
        // debugger
        const successCB = () => {
            if (this.initialFollowState == "unfollowed") {
                this.initialFollowState = "followed";
            } else if (this.initialFollowState == "followed") {
                this.initialFollowState = "unfollowed";
            }
            this.render();
        }

        if (this.initialFollowState == "unfollowed") {
            twitterAPIUtil.clickFollowAjax(this.userId).then((successCB));
            // this.initialFollowState = "followed";
        } else if (this.initialFollowState == "followed") {
            twitterAPIUtil.clickUnfollowAjax(this.userId).then(successCB);
            // this.initialFollowState = "unfollowed";
        }
        
    })
}


module.exports = FollowToggle;