class AddRefToTags < ActiveRecord::Migration[5.2]
  def change
      add_column :tags, :tagname_id, :integer
  end
end
