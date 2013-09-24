class CreateTasks < ActiveRecord::Migration
  def up
    create_table :tasks do |t|
      t.integer :priority
      t.string :task
      t.timestamps
    end
  end

  def down
    drop_table :tasks
  end
end
