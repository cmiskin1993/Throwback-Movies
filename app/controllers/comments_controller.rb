class CommentsController < ApplicationController

    def index 
        comments = Comment.all 
        render json: comments, status: :ok
    end
end

def show
    movie = Comment.find(params[:id])
    render json: comment, status: :ok
end 
