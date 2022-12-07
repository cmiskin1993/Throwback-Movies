class User < ApplicationRecord

    validates :name, presence: true, length: { minimum: 3 }
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true,length: { minimum: 4 }



    has_secure_password
end