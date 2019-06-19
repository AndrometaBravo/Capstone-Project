class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
        t.references :user, foreign_key: true
        t.string :post
        t.integer :post_status

      t.timestamps
    end
  end
end
