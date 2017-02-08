class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name

      #has_secure_password
      t.string :password_digest

      t.references :team

      t.timestamps
    end
  end
end
