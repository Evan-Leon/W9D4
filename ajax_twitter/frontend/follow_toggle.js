const twitterAPIUtil = require("./twitter_api_util");
function FollowToggle($button){
    this.userId = $button.data("user-id");
    this.initialFollowState = $button.data("initial-follow-state");
    this.followState = this.initialFollowState;
    this.$button = $button;
    this.render();
    this.handleClick();
    
}

FollowToggle.prototype.render = function() {

    if (this.followState == "unfollowed") {
        this.$button[0].disabled = false;
        this.$button.text("Follow!");
    } else if (this.followState == "followed") {
        this.$button[0].disabled = false;
        this.$button.text("Unfollow!");
    } else if (this.followState == "following"){
        this.$button[0].disabled = true;
        this.$button.text("following...");
    } else if (this.followState == "unfollowing"){
        this.$button[0].disabled = true;
        this.$button.text("unfollowing...");
    }
}

FollowToggle.prototype.handleClick = function() {
    this.$button.on("click", (e) => {
        e.preventDefault();
        // debugger
        const successCB = () => {
            if (this.followState == "following") {
                this.followState = "followed";
            } else if (this.followState == "unfollowing") {
                this.followState = "unfollowed";
            }
            this.render();
        }

        if (this.followState == "unfollowed") {
            this.followState = "following";
            this.render();
            twitterAPIUtil.clickFollowAjax(this.userId).then((successCB));
            
        } else if (this.followState == "followed") {
            this.followState = "unfollowing";
            this.render();
            twitterAPIUtil.clickUnfollowAjax(this.userId).then(successCB);
            
        }
        
    })

}


module.exports = FollowToggle;