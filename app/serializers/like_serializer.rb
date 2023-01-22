class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id

  belongs_to :movie_id
  belongs_to :user_id

end
