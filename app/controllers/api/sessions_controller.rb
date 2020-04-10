class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user
            log_in!(@user)
            render "api/users/show"
        elsif params[:user][:email].length < 1
            render json: ["Please fill out this field", 2], status: 402
        elsif !params[:user][:email].include?("@")
            render json: ["please include an '@' in the email address.", 2], status: 403
        elsif params[:user][:password].length < 1
            render json: ["Please fill out this field", 3], status: 401
        else 
            render json: ["The email address or password you entered is incorrect.", 7], status: 401
        end
       
    end

    def destroy
        @user = current_user
        if @user
            log_out!
            render "api/users/show"
        end
    end
end


#login The email address or password you entered is incorrect.
#please include an '@' in the email address. 'a' is missing an @
#password bubble = please fill out this field