Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/gifts', to: 'gifts#index'

  get '/gifts/:id', to: 'gifts#show'

  post '/gifts', to: 'gifts#create'

  delete '/gifts/:id', to: 'gifts#delete'

  put '/gifts/:id', to: 'gifts#update'

end
