class User < ApplicationRecord
  belongs_to :team

  has_secure_password

  def self.from_token_request(request)
    name = request.params["auth"] && request.params["auth"]["name"]
    self.find_by(name: name)
  end
end
