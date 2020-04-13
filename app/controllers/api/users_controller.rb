class Api::UsersController < ApplicationController


    def create 
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render "api/users/show"
        elsif params[:user][:first_name].length < 1
            render json: ["Please fill out this field.", 5], status: 499
        elsif params[:user][:last_name].length < 1
            render json: ["Please fill out this field.", 1], status: 498
        elsif params[:user][:email].length < 1
            render json: ["Please fill out this field.", 2], status: 403
        elsif !params[:user][:email].include?("@")
            render json: ["please include an '@' in the email address.", 2], status: 469
        elsif params[:user][:password].length < 1
            render json: ["Please fill out this field.", 3], status: 405
        elsif params[:user][:password].length < 6
            render json: ["Please choose a password of at least 6 characters", 7,], status: 405
        elsif params[:user][:zipcode].length < 1
            render json: ["Please enter your ZIP code.", 7], status: 406
        elsif params[:user][:zipcode].length < 5 || params[:user][:zipcode].length > 5  
            render json: ["Oops, looks like an invalid ZIP code.", 7], status: 410
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :zipcode)
    end

end