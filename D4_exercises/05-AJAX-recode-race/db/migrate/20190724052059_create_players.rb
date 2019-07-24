class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
    
      t.string :name 
      t.integer :game_id

      t.timestamp
    end
  end
end
