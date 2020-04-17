class Api::RestaurantsController < ApplicationController
   

    def create
        @restaurant = Restaurant.create!(restaurant_params)
    end

    def index
        @restaurants = Restaurant.all
    end

    def search 
        # debugger
        search = params[:search]
       
    
              @restaurants = Restaurant.where(["name LIKE ?", "%#{search}%"])  
            #   debugger
            if @restaurants.length == 0
                @restaurants = Restaurant.where(["address LIKE ?", "%#{search}%"])
            end    
            if @restaurants.length == 0
              lower = search.downcase.capitalize
            
              x = Tag.find_by(["tag LIKE ?", "%#{lower}%"])
            #   debugger
              if x
                @restaurants = x.restaurants
              end
            end
        # end
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