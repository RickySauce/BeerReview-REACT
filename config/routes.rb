Rails.application.routes.draw do
 post '/login' => 'sessions#create'
  resources :users, only:[:create]
  resources :reviews, only:[:index]
  resources :beers, only:[:index]
end
