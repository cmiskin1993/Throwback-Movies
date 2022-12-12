class MoviesController < ApplicationController

    def index 
        render json: Movie.all, status: :ok
    end 

    private
    
    def movie_params
        params.permit(:title, :genre, :description, :image)
    end 

end