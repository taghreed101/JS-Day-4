class Player < ActiveRecord::Base
    
    belongs_to :game, :class_name => "Game", :foreign_key => "game_id"

    # add_index(:players,:name, :unique => true)

 end