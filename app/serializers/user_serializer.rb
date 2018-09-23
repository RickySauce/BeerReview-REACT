class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :beers, through: :reviews
end
