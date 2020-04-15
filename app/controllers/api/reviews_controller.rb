class Api::ReviewsController < ApplicationController
# Review.find_by(restaurant_id: "37")

    def index
        @reviews = Review.all
        #needs to be able to be an array so i can do .each in the jbuilder
        # @reviews = Review.find_by(restaurant_id: params[:id])
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :index
        else 
            render json: ["You are missing something from the review."], status: 42069
        end
    end



    def review_params
        params.require(:review).permit(:id, :body, :score, :user_id, :restaurant_id)
    end
end