class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :description, :image, :user_id

  has_many :comments
  has_many :likes


end
