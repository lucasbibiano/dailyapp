class Teams::TeamTokenProtectedController < ApplicationController
  before_action :validate_team_token
  before_action :authenticate_user

  def set_team
    @team = Team.find(params[:team_id])
  end

  def validate_team_token
    if !(set_team && ActiveSupport::SecurityUtils.secure_compare(params[:token], @team.token))
      raise ActionController::RoutingError.new('Not Found')
    end
  end
end