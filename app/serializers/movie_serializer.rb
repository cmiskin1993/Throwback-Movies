class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :description, :image
end
