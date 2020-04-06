class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:email])
        if @user
            log_in!(@user)
            redirect_to users_url
        else
            flash[:errors] = ['Invalid email or password'] #fix_me
            render :new
        end
    end

    def destroy
        if logged_in?
            log_out!
        end
        redirect_to new_session_url #fix_me
    end
end