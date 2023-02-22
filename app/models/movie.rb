class Movie < ApplicationRecord
    has_many :comments
    has_many :likes

    validates :title, presence: true, uniqueness: {case_sensitive: false}
    validates :genre, presence: true
    validates :description, presence: true, uniqueness: {case_sensitive: false}
    validates :image, presence: true, uniqueness: {case_sensitive: false}
end
