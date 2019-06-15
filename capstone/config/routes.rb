Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


root to: 'pages#index'
end
