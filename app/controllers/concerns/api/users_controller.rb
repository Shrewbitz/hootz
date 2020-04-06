class UsersController < ApplicationController

  

    def create 
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            redirect_to users_url #fix_me
        else
            flash[:errors] = ["Password is too short (minimum is 7 characters)"]
            render :new #fix_me
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end