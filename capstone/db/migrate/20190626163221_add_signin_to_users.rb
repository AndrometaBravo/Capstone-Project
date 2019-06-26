class AddSigninToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_signed_in, :boolean
  end
end
