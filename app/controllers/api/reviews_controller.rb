class Api::ReviewsController < ApplicationController
    
    def index
        # debugger
        # @reviews = Review.all
        # debugger
        #needs to be able to be an array so i can do .each in the jbuilder
        @reviews = Review.where(restaurant_id: params[:restaurant_id])
        render :index
        # Review.find_by_sql()
    end
    
    def create
        @review = Review.new(review_params)
        @doubles = Review.where(restaurant_id: params[:restaurant_id]).where(user_id: review_params[:user_id])
        # if @doubles.length > 0
        #     render json: ["You have already written a review"], status: 987
        if @review.save 
            @doubles[0...-1].each do |double|
                double.delete
            end
            @reviews = Review.where(restaurant_id: params[:restaurant_id])
            render :index
        else 
            render json: ["You are missing something from the review."], status: 42069
        end
    end
    
    # Review.find_by(restaurant_id: "37")


    def review_params
        params.require(:review).permit(:id, :body, :score, :user_id, :restaurant_id, :data)
    end
end