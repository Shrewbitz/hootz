class Api::RestaurantsController < ApplicationController
   

    def create
        @restaurant = Restaurant.create!(restaurant_params)
    end

    def index
        @restaurants = Restaurant.all
    end

    def search 
        # debugger
        split_search = params[:search].split("_")
        search1 = split_search[0]
        search2 = split_search[1]
        if  search1 != ""
            @restaurants = Restaurant.where(["name LIKE ?", "%#{search1}%"])  
        end
        if search2 != nil
            @restaurants = Restaurant.where(["lower(address) LIKE ?", "%#{search2.downcase}%"])
        end    
        if search1 != ""
            lower = search1.downcase.capitalize
            x = Tag.find_by(["tag LIKE ?", "%#{lower}%"])
            if x
                @restaurants = x.restaurants
            end
        end

        render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        if @restaurant
            render :show
        else
            
        end
    end


    def restaurant_params
        params.require(:restaurant).permit(:id, :name, :phone, :website, :address, :coordinates, :about, :cost, :tags)
    end


end