OSConf::Application.routes.draw do
  root :to => "home#index"
    
  # more or less static content
  get "/about" => "content#about"

end
