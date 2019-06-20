Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  devise_scope :user do
      get 'allusers' => 'users/sessions#index'
      get 'users/:id' => 'users/sessions#oneuser'
  end

  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }


root to: 'pages#index'
end
