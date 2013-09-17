require 'rake'
require 'faker'
# require 'rspec/core/rake_task'
require_relative 'db/config'
require_relative 'app/models/contact.rb'


desc "create the database"
task "db:create" do
  touch 'db/ar-address.sqlite3'
end

desc "drop the database"
task "db:drop" do
  rm_f 'db/ar-address.sqlite3'
end

desc "migrate the database (options: VERSION=x, VERBOSE=false, SCOPE=blog)."
task "db:migrate" do
  ActiveRecord::Migrator.migrations_paths << File.dirname(__FILE__) + 'db/migrate'
  ActiveRecord::Migration.verbose = ENV["VERBOSE"] ? ENV["VERBOSE"] == "true" : true
  ActiveRecord::Migrator.migrate(ActiveRecord::Migrator.migrations_paths, ENV["VERSION"] ? ENV["VERSION"].to_i : nil) do |migration|
    ENV["SCOPE"].blank? || (ENV["SCOPE"] == migration.scope)
  end
end


desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end

desc 'Creates 5 random entries'
task "db:seed" do 
  5.times do 
    name = Faker::Name.name
    Contact.create(full_name: name, email: Faker::Internet.email(name), password: Faker::Internet.password )
  end
  puts "5 people have been added"
end

desc "Does everything"
task "db:doall" do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
    puts "doneskies!"
end
