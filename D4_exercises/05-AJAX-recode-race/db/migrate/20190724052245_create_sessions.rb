class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
    
      t.timestamp
    end
  end
end
