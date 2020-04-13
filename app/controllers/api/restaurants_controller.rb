class Api::RestaurantsController < ApplicationController

    def create
        @restaurant = Restaurant.create!(restaurant_params)
    end

    def index
        @restaurants = Restaurant.all
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        if @restaurant
            render :show
        else
            
        end
    end


    def restaurant_params
        params.require(:restaurant).permit(:id, :name, :phone, :website, :address, :coordinates, :about, :cost)
    end


end