class Beer < ApplicationRecord
  has_many :reviews


  def rating
     @rating = 0
     self.reviews.each do |review|
       @rating += review.rating
     end
      if @rating != 0
       @rating /= self.reviews.count
       @rating.round(2)
     else
       @rating = nil
       @rating
     end
   end


 end
