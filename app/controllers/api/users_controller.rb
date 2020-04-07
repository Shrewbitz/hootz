class Api::UsersController < ApplicationController

  require 'byebug'

    def create 
        debugger
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render "api/users/"
        else
            render json: @user.errors.full_messages, status: 499
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end

end