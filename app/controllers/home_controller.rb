class HomeController < ApplicationController

  def index
  end

  def post		
		if params[:email] && params[:email].include?('@')  	
			render :json => {'email' => params[:email], 'response' => 'OK'}
		    entry = Entry.new
    		entry.value = params.to_s
			entry.save
		else
			render :json => {'email' => params[:email], 'response' => 'Whoops! Please check your email address and try again.'}
		end    
  end

end
