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
   
        if !@review.user_id
            return render json: ["You are not logged in."], status: 2020
        end
        if @review.save! 
            @doubles[0...-1].each do |double|
                double.delete
            end
            @reviews = Review.where(restaurant_id: params[:restaurant_id])
            # render :show # wrong approach probs bring back index
            render :show
        else 
            render json: ["You are missing something from the review."], status: 42069
        end
    end
    
    # Review.find_by(restaurant_id: "37")


    def review_params
        params.require(:review).permit(:id, :body, :score, :user_id, :restaurant_id, :data)
    end
end