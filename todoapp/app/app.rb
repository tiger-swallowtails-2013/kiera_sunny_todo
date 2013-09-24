require "sinatra"
require_relative 'config'
require_relative './models/task'

get '/' do 
  @tasks = Task.all
  erb :index
end