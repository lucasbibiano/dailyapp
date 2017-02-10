class Teams::SprintsController < Teams::TeamTokenProtectedController

  # POST teams/1/sprints
  def create
    last_active_sprint = Sprint.last
    last_active_sprint.update_attribute(:end_date, Date.today) if last_active_sprint

    @sprint = Sprint.create(start_date: Date.today, team: @team)

    if @sprint.save
      render json: { last_sprint: last_active_sprint, actual_sprint: @sprint }, status: :created
    else
      render json: @sprint.errors, status: :unprocessable_entity
    end
  end


  private
    def set_sprint
      @sprint = Sprint.find(params[:id])
    end

    def sprint_params
      params.require(:sprint)
    end
end
