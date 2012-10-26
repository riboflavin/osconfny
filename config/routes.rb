OSConf::Application.routes.draw do
  #root :to => "home#index"
    
  get "/" => "home#index"
  post "/" => "home#post"
  get "/lkaDCadslkjc28c9dk4JKCD78" => "home#viewall"

end
