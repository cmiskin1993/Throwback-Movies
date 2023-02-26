class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :movie_id, :user_id

  belongs_to :user
  # has_one :movie_id
end
