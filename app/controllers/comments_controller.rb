class CommentsController < ApplicationController

def index
    # TODO: error handling for movie not found
    @movie = Movie.find(params[:movie_id])
        render json: @movie.comments, status: :ok
    end

def show
    comment = Comment.find(params[:id])
    render json: comment, status: :ok
end 

def create
    @movie = Movie.find(params[:movie_id])
    params[:user_id] = current_user.id
    @comment = @movie.comments.create(comment_params)
    render json: @comment, status: :created
end

def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    head :no_content 
end 

def update 
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment, status: :accepted
end 


private
    
def comment_params
    params.permit(:id, :content, :movie_id, :user_id, :name)    
    end
end