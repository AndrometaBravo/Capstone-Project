class RenameTagColumns < ActiveRecord::Migration[5.2]
  def change
      remove_column :tags, :users_id
      rename_column :tags, :posts_id, :post_id
  end
end
