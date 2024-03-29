class LikesController < ApplicationController

    before_action :is_authorized?, only: [:index, :show, :create]

    def index 
        likes = Like.all 
        render json: likes, status: :ok
    end

    def show
        movie = Like.find(params[:movie_id])
        render json: likes, status: :ok
    end 

    def create 
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    private

    def like_params
        params.permit(:user_id, :movie_id, :like)
    end
end