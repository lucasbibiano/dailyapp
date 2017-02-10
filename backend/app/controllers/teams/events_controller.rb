class Team::EventsController < Teams::TeamTokenProtectedController

  # POST team/1/events
  def create
    actual_sprint = Sprint.last
    reporter = current_user

    @event = Event.new(event_params.merge(reporter: reporter, sprint: actual_sprint))

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:event_type, :name, :notes, :tags)
    end
end
