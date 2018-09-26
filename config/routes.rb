Rails.application.routes.draw do
 post '/login' => 'sessions#create'
  resources :users, only:[:create]
  resources :reviews, except:[:new, :edit]
  resources :beers, only:[:index]
end
