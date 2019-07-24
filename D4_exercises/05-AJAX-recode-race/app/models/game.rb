class Game < ActiveRecord::Base
has_many :players, :class_name => "Player", :foreign_key => "game_id"
belongs_to :sessions, :class_name => "Session", :foreign_key => "session_id"

end