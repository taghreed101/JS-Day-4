class Session < ActiveRecord::Base
    has_many :games, :class_name => "Game", :foreign_key => "game_id"
end