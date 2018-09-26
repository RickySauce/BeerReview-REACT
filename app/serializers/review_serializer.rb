class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :taste, :smell, :look, :feel, :rating, :beer_id, :beer, :user
   belongs_to :user
   belongs_to :beer
end
