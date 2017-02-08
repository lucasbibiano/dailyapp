Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'

  resources :teams, module: 'teams' do
    resources :users
  end
end
