class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.text :description
      t.string :image
      t.integer :user_id



      t.timestamps
    end
  end
end
