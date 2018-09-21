class Beer < ApplicationRecord
  has_many :reviews

  def rating
    if !self.reviews.blank?
      self.reviews.each do |review|
        self.rating.nil? ? self.rating = 0 : self.rating += review.rating
      end
      self.rating /= self.reviews.count
      self.rating = self.rating.round(2)
      self.save
    end
  end

end
