const twitterAPIUtil = {

  clickFollowAjax: () => {
    return $.ajax({
      method: "POST",
      url: "/users/:user_id/follow",
      
    })
    
  },
  
  clickUnfollowAjax: () => {
    return $.ajax({
      method: "DELETE",
      url: "/users/:user_id/follow",
    })
    

  }


}