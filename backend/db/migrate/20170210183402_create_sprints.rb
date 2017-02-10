class CreateSprints < ActiveRecord::Migration[5.0]
  def change
    create_table :sprints do |t|
      t.date :end_date
      t.date :start_date
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
