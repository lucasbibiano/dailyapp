class Event < ApplicationRecord
  belongs_to :reporter, class_name: "User"
  belongs_to :sprint
end
