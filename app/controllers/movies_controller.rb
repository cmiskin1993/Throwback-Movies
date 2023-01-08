class MoviesController < ApplicationController

    before_action :is_authorized?, only: [:show]


    def index 
        render json: Movie.all, status: :ok
    end 

    def show
        movie = Movie.find(params[:id])
        render json: movie, status: :ok
    end 

    # def create
    #     user = User.find_by(id: session[:user_id])
    #     movie = user.movies.create!(movie_params)
    #     render json: movie, status: :created
    # end 

    private
    
    def movie_params
        params.permit(:id, :title, :genre, :description, :image)
    end 

end