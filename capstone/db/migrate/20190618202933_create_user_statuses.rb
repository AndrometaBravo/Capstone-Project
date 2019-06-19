class CreateUserStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :user_statuses do |t|
        t.references :sender
        t.references :recipient
        t.integer :status
      t.timestamps
    end
    add_foreign_key :user_statuses, :users, column: :sender_id, primary_key: :id
    add_foreign_key :user_statuses, :users, column: :recipient_id, primary_key: :id
  end
end
