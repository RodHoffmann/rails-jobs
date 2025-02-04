require 'ferrum'
require 'nokogiri'

class EvermoodScraper < BaseScraper
  def extract_data
    return {} unless @doc
    javascript_scrapper
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

  private

  def javascript_scrapper
    browser = Ferrum::Browser.new
    browser.goto(@url)
    browser.at_css('div.notion-table-view-cell') || browser.network.wait_for_idle
    html = browser.body
    @doc = Nokogiri::HTML(html)
  end
end
