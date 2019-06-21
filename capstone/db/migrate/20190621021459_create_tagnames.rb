class CreateTagnames < ActiveRecord::Migration[5.2]
  def change
    create_table :tagnames do |t|

        t.string :tag
        


      t.timestamps
    end
  end
end
