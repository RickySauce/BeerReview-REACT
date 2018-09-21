class Review < ApplicationRecord
  belongs_to :user
  belongs_to :beer
  validates :taste, :smell, :feel, :look, :inclusion => 0.1..5

  def rating
    self.rating = (self.look + self.feel + self.taste + self.smell) / 4.0
    self.rating = self.rating.round(2)
    self.save
  end

  # def self.find_review(user_id, beer_id)
  #   Review.where("user_id = ? and beer_id = ?", user_id, beer_id)
  # end

end
