require 'sinatra'
require "sinatra/activerecord"

require_relative 'app'



if settings.test?
  set :database, "sqlite3:///db/test-db.db"
else
  configure :development  do
    set :database, "sqlite3:///todo.sqlite3"
  end

  configure :production do
    ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/todo')
  end
end