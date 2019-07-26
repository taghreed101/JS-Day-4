require "byebug"

class ApplicationController < Sinatra::Base

  register Sinatra::ActiveRecordExtension

  configure do
  	set :views, "app/views"
    set :public_dir, "public"
    #enables sessions as per Sinatra's docs. Session_secret is meant to encript the session id so that users cannot create a fake session_id to hack into your site without logging in. 
    enable :sessions
    set :session_secret, "secret"
  end

  get '/' do
    erb :home 
  end

  post '/sessions', provides: [:json] do
  
    @session = Session.create()
    # byebug
    {:session => @session}.to_json
   
  end

  get '/sessions/:id/games', provides: [:json] do
    
   
  end

  get '/games/:id/results', provides: [:json] do
    
    # byebug
    game=Game.find(params["id"])
    player=Player.find_by(id:game.winner,game_id:game.id)

    {:session_id => game.session_id,:winner => player.name,:elapsed_time => game.elapsed_time }.to_json  
  end

  post '/sessions/:id/games', provides: [:json] do
    # byebug
    request.body.rewind
    @return = JSON.parse(request.body.read)
    @newgame = Game.create(session_id: params[:id], status: "started")
  #  byebug
    @first_player = Player.find_or_create_by(name: @return["player1"]) 
    @first_player.update(game_id: @newgame.id)
    @first_player.save
    @second_player= Player.find_or_create_by(name: @return["player2"])
    @second_player.update(game_id: @newgame.id)
    @second_player.save
    game_hash = JSON.parse(@newgame.to_json)
    game_hash[:player] = JSON.parse(@newgame.players.to_json)
    # # byebug
    {:session_id => params[:id],:game => game_hash }.to_json  
  end

  patch '/games/:id/finish', provides: [:json] do
    request.body.rewind
    @hash_data = JSON.parse(request.body.read)
    @game = Game.find_by(id: params[:id], status: "started")
  #  byebug
    @game.update(status: "completed", winner: @hash_data["winner"], elapsed_time: @hash_data["elapsed_time"])
    # byebug
    @game_hash = JSON.parse(@game.to_json)
    @game_hash[:player] = JSON.parse(@game.players.to_json)
    # byebug
    {:session_id => @game.session_id,:game => @game_hash }.to_json
  end

end
