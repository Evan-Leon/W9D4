const twitterAPIUtil = {

  clickFollowAjax: (userId) => {
    return $.ajax({
      method: "POST",
      url:`/users/${userId}/follow`,
      dataType: "json",
    })
    
  },
  
  clickUnfollowAjax: (userId) => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${userId}/follow`,
      dataType: "json",
    })
    

  }


}

module.exports = twitterAPIUtil;