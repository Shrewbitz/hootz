class Api::RestaurantsController < ApplicationController

    def create
        @restaurant = Restaurant.create!(restaurant_params)
    end


    def show
        @restaurant = Restaurant.find(params[:id])
        if @restaurant
            render :show
        else
            
        end
    end


    def restaurant_params
        params.require(:restaurant).permit(:id, :name, :owner_id, :phone, :website, :address, :coordinates, :about, :cost)
    end


end