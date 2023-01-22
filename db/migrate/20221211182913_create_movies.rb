class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.text :description
      t.string :image
      t.boolean :like, default: :false



      t.timestamps
    end
  end
end
