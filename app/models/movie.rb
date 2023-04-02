class Movie < ApplicationRecord
    has_many :comments
    has_many :likes

    validates :title, presence: true, uniqueness: {case_sensitive: false}, length: { minimum: 3 }
    validates :genre, presence: true, length: { minimum: 3 }
    validates :description, presence: true, length: { minimum: 30 }
    validates :image, presence: true, url: true
    validate :image_url_is_reachable,  :if => Proc.new { |movie| movie.errors["image"].empty? }
    
    def image_url_is_reachable
        response = HTTParty.get(image)
        puts "image url resp: #{response.code}"
        puts "image url type: #{response.headers['content-type']}"

        success = response.code == 200
        is_image = response.headers['content-type'].include?('image/')
        if !success || !is_image 
            errors.add(:image, "image is unreachable")
        end
    end
end
