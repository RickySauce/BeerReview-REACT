class BeersController < ApplicationController

  def index
    @beers = Beer.all
    render json: @beers
  end

  def update
  @beer = Beer.find_by(id: params["id"])
  @beer.update(likes: params["beer"]["likes"])
  end
  #
  # def show
  #   @beer = Beer.find_by(id: params["id"])
  #   if @beer.nil?
  #     redirect_to root_path
  #   else
  #     respond_to do |format|
  #       format.json {render json: @beer}
  #       format.html {render :show}
  #     end
  #   end
  # end

end
