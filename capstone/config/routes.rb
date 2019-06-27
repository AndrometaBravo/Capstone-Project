Rails.application.routes.draw do

    resources :userstatus
        get 'destroyfriendship/:user_id' => 'userstatus#customdelete'
    resources :posts
        get 'onlineusers' => 'posts#onlineposts'
    resources :tags
    resources :tagnames


  devise_for :users, controllers: { sessions: 'users/sessions' }
  devise_scope :user do
      get 'allusers' => 'users/sessions#index'
      get 'users/:id' => 'users/sessions#oneuser'
      get 'friends' => 'users/sessions#friends'
      get 'friendid' => 'users/sessions#friendid'
      get 'pendingid' => 'users/sessions#pendingids'
      get 'sentpendingid' => 'users/sessions#sentpendingids'
  end


  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }


  root to: 'pages#index'

end
