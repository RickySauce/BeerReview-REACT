class Beer < ApplicationRecord
  has_many :reviews


  def rating
    if !self.reviews.blank?
     self.reviews.each do |review|
       @rating.nil? ? @rating = 0 : @rating += review.rating
     end
       @rating /= self.reviews.count
       @rating.round(2)
    end
   end

 end
