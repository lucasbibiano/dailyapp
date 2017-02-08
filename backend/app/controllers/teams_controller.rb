class TeamsController < ApplicationController

  # POST /teams
  def create
    @team = Team.new(team_params)

    if @team.save
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  private

    def team_params
      params.require(:team).permit(:name)
    end
end
