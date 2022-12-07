class UsersController < ApplicationController
    skip_before_action :authenticated_user, only: :create

    def show 
        if current_user
            render json: current_user 
        else 
            render json: {error: "No Current User exists"}
        end
    end 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end 

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content 
    end


    private 

    def user_params
        params.permit(:name, :email, :password)
    end 
end