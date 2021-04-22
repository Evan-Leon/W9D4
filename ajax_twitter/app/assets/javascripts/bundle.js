/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const twitterAPIUtil = __webpack_require__(/*! ./twitter_api_util */ "./frontend/twitter_api_util.js");
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
        if (this.initialFollowState == "unfollowed") {
            twitterAPIUtil.clickFollowAjax(this.userId);
            this.initialFollowState = "followed";
        } else if (this.initialFollowState == "followed") {
            twitterAPIUtil.clickUnfollowAjax(this.userId);
            this.initialFollowState = "unfollowed";
        }
        // this.$button.attr("initialFollowState")
        
    })
}


module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/twitter_api_util.js":
/*!**************************************!*\
  !*** ./frontend/twitter_api_util.js ***!
  \**************************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");









$(() =>{
    $(".follow-toggle").each(function (idx, button){
        // debugger
        new FollowToggle($(button));
    })
    // setEventHandlers();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map