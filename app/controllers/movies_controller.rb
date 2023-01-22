class MoviesController < ApplicationController

    before_action :is_authorized?, only: [:show]


    def index
        movies = Movie.all
        render json: movies, status: :ok
    end

def show
    movie = find_movie
    render json: movie, status: :ok
end

    # def create
    #     user = User.find_by(id: session[:user_id])
    #     movie = user.movies.create!(movie_params)
    #     render json: movie, status: :created
    # end 

    private

    def find_movie
        Movie.find_by!(id: params[:id])
    end
    
    def movie_params
        params.permit(:id, :title, :genre, :description, :image)
    end 
end 
