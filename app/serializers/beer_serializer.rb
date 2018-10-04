class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :style, :abv, :rating, :likes
  has_many :reviews
end
