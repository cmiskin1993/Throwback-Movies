class SessionsController < ApplicationController
  skip_before_action :authenticated_user, only: :create

  # post '/login'
  def create
    user = User.find_by_name(params[:name])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: {errors: "Incorrect username or password"}, status: :not_found
    end

  end

  # delete '/logout'
  def destroy
    session.delete(:user_id)
  end
  
end