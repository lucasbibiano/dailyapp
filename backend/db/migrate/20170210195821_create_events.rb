class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :event_type
      t.string :name
      t.text :notes
      t.references :reporter, foreign_key: true
      t.string :tags
      t.references :sprint, foreign_key: true

      t.timestamps
    end
  end
end
