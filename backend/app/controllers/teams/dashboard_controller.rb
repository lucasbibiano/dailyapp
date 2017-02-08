class Teams::DashboardController < Teams::TeamTokenProtectedController

  # POST /teams/1/dashboard
  def show
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

end
