OSConf::Application.routes.draw do
  #root :to => "home#index"
    
  get "/" => "home#index"
  post "/" => "home#post"

end
