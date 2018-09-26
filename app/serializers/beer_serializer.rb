class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :style, :abv, :rating
  has_many :reviews
end
