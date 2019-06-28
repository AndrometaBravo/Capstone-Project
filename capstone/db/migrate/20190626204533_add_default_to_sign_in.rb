class AddDefaultToSignIn < ActiveRecord::Migration[5.2]
  def change
      remove_column :users, :is_signed_in, :boolean
      add_column :users, :is_signed_in, :boolean, default: true 
  end
end
