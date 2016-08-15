Rails.application.routes.draw do
  root to: 'application#index'

  resources :opinions, only: :index
end
