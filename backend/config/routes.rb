Rails.application.routes.draw do
  resources :events
  post 'user_token' => 'user_token#create'

  resources :teams, module: 'teams' do
    resources :users
    resources :sprints
  end
end
