class CreateOpinions < ActiveRecord::Migration[5.0]
  def change
    create_table :opinions do |t|
      t.string :text, limit: 140, null: false
      t.string :side1, limit: 14, null: false
      t.string :side2, limit: 14, null: false
      t.string :image

      t.timestamps
    end
  end
end
