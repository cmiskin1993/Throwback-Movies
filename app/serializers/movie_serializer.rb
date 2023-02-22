class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :description, :image, :user_id

end
