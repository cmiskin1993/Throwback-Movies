class MoviesController < ApplicationController

    before_action :is_authorized?, only: [:show, :create]


    def index
        render json: Movie.all, status: :ok
    end

    def show
        movie = find_movie
        render json: movie, status: :ok
    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end 

    private

    def find_movie
        Movie.find_by!(id: params[:id])
    end
    
    def movie_params
        params.require(:movie).permit(:id, :title, :genre, :description, :image, :user_id, :movies, :ongoing)
    end 
end 
