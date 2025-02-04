class PositionsController < ApplicationController
  def index
    evermood_positions = EvermoodScraper.new('https://evermood.notion.site/8d0e290f31ac40d7b558c8ffcb34c65c?v=59241b2c859b4a328323e1e56a0933d7').extract_data
    funke_works_positions = FunkeWorksScraper.new('https://www.funkeworks.de/jobs').extract_data
    @positions = evermood_positions + funke_works_positions
  end
end
