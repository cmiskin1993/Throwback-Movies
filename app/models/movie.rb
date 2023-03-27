class Movie < ApplicationRecord
    has_many :comments
    has_many :likes

    validates :title, presence: true, uniqueness: {case_sensitive: false}, length: { minimum: 3 }
    validates :genre, presence: true, length: { minimum: 3 }
    validates :description, presence: true, length: { minimum: 30 }
    validates :image, presence: true
end
