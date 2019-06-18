class AddInfoToUsers < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :username, :string
      add_column :users, :gender, :string
      add_column :users, :age, :integer
      add_column :users, :bio, :string
      add_column :users, :picture_url, :string
      add_index :users, :username,                unique: true
  end
end
