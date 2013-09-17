require_relative '../../db/config'

class Contact< ActiveRecord::Base

  def self.exist?(input_email)
    self.find_by(email: input_email) != nil
  end

end
