class AddLikesToBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :likes, :integer, :default => 0
  end
end
