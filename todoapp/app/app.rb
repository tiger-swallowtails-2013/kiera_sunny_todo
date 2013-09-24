require "sinatra"
require_relative 'config'

get '/' do 
  erb :index
end