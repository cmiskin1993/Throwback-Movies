class AddUserIdToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :user_id, :integer
  end
end
