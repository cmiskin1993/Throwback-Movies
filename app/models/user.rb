class User < ApplicationRecord

    # has_many :comments
    # has_many :likes

    validates :name, presence: true, length: { minimum: 3 }
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true,length: { minimum: 4 }



    has_secure_password
end