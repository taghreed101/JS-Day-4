class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
    
      t.integer :winner
      t.string :status
      t.integer :elapsed_time
      t.integer :session_id
      
      
      t.timestamp
    end
  end
end
