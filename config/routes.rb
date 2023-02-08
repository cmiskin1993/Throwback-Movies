Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :users, only: [:show, :create, :destroy]

  resources :movies, only: [:index, :create, :show, :update, :destroy] do
    resources :comments, shallow: true
  end

  resources :likes, only: [:index, :create]



  post '/login', to: 'sessions#create'
  get '/authorized_user', to:'users#show'
  delete '/logout', to: 'sessions#destroy'

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
