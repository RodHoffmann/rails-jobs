require 'ferrum'
require 'nokogiri'

class EvermoodScraper < BaseScraper
  URL = url = 'https://evermood.notion.site/8d0e290f31ac40d7b558c8ffcb34c65c?v=59241b2c859b4a328323e1e56a0933d7'.freeze
  
  def initialize
    super(URL)
  end

  def extract_data
    return {} unless @doc
    javascript_scrapper('div.notion-table-view-cell')
    positions = @doc
    positions.css('div.notion-table-view-cell span > span').map do |position|
      next unless is_an_engineer_position?(position)
      {
        title: position.text,
        link: @url,
        company: 'Evermood'
    }
    end.compact
  end
end
