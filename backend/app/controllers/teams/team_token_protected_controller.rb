class Teams::TeamTokenProtectedController < ApplicationController
  before_action :validate_team_token

  def set_team
    @team = Team.find(params[:team_id])
  end

  def validate_team_token
    set_team && ActiveSupport::SecurityUtils.secure_compare(token, @team.token)
  end
end