Rails.application.routes.draw do

    resources :posts
  devise_for :users, controllers: { sessions: 'users/sessions' }

  devise_scope :user do
      get 'allusers' => 'users/sessions#index'
      get 'users/:id' => 'users/sessions#oneuser'
      get 'friends' => 'users/sessions#friends'
  end


  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }


  root to: 'pages#index'

end
