Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: 'users/sessions' }
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }

  devise_scope :user do
      get 'allusers' => 'users/sessions#index'
      get 'users/:id' => 'users/sessions#oneuser'
      get 'friends' => 'users/sessions#friends'
  end

  get 'feed' => 'posts#index'



  root to: 'pages#index'

end
