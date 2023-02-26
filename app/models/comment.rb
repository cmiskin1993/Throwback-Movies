class Comment < ApplicationRecord
    # belongs_to :movie
    # belongs_to :user

    validates :content, presence: true, length: { minimum: 3 }
end
