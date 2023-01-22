class CommentsController < ApplicationController

def index 
        comments = Comment.all 
        render json: comments, status: :ok
    end

def show
    movie = Comment.find(params[:user_id])
    render json: comments, status: :ok
end 

def create
    @movie = Movie.find(params[:movie_id])
    params[:user_id] = current_user.id
    @comment = @movie.comments.create(comment_params)
    render json: @comment, status: :created
end


private
    
def comment_params
    params.permit(:id, :content, :movie_id, :user_id)
    end
end