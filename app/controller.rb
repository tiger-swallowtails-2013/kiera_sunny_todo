require 'sinatra'
require_relative '../db/config.rb'
require_relative 'models/contact.rb'

get '/' do
  erb :login
end

post '/' do
  if Contact.exist?(params[:email]) == false
    redirect '/signup'
  end

  if params[:password] == Contact.find_by(email:params[:email]).password
    "Success! Welcome back #{Contact.find_by(email:params[:email]).full_name}"
  else
    "You suck. Put in a correct password or go sign up."
  end
end

# get '/form' do
#   erb :form
# end

get '/signup' do
  erb :form
end

post '/signup' do
  Contact.create(full_name: params[:name], email: params[:email], password: params[:password])
  redirect '/'
end
