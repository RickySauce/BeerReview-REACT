class ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    @review = Review.find(params["id"])
    render json: @review
  end
  #
  def destroy
    @review = Review.find_by(id: params["id"])
    @review.destroy
    flash[:message] = "Successfully deleted review."
    redirect_to root_path
  end
  #

  def update
    @review = Review.find_by(id: params["id"])
    if @review.update(review_params)
      render json: @review
    else
      render :json => { :errors => @user.errors}
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      @review.rating=(@review.rating)
      @review.beer.rating=(@review.beer.rating)
      @review.beer.save
      binding.pry
      @review.save
      render :json => @review, status: 201
    else
       render :json => { :errors => @review.errors}
    end
  end

  private

  def review_params
     params.require(:review).permit(
       :taste,
       :look,
       :feel,
       :smell,
       :beer_id,
       :user_id,
       :content
     )
   end

end
