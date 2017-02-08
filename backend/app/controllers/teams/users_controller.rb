class Teams::UsersController < Teams::TeamTokenProtectedController

  # POST /teams/1/users
  def create
    @user = User.new(user_params.merge(team_id: @team.id))

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name)
    end
end


EVpBxUtYFtQK1PnFRjFSQSv5