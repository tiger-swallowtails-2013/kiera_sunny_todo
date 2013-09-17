require_relative '../db/config.rb'
require_relative 'models/contact.rb'

# params[:email]

p Contact.find_by(email:'sunnyisthebest@rosafddsfckin.com') != nil

