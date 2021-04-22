# == Route Map
#
#       Prefix Verb   URI Pattern                     Controller#Action
#         feed GET    /feed(.:format)                 feeds#show
#  new_session GET    /session/new(.:format)          sessions#new
#      session DELETE /session(.:format)              sessions#destroy
#              POST   /session(.:format)              sessions#create
#       tweets POST   /tweets(.:format)               tweets#create
# search_users GET    /users/search(.:format)         users#search
#  user_follow DELETE /users/:user_id/follow(.:format)follows#destroy
#              POST   /users/:user_id/follow(.:format)follows#create
#        users POST   /users(.:format)                users#create
#     new_user GET    /users/new(.:format)            users#new
#         user GET    /users/:id(.:format)            users#show
#         root GET    /                               redirect(301, /feed)

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :feed, only: [:show]
  resource :session, only: [:create, :destroy, :new]
  resources :tweets, only: [:create]
  resources :users, only: [:create, :new, :show] do
    get 'search', on: :collection

    resource :follow, only: [:create, :destroy]
  end

  root to: redirect('/feed')
end
